import Header from "./header";
import "../styles/post_form.css"
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import moment from "moment/moment";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Slide, Zoom, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostForm = () => {

  const [form, setForm] = useState({ author: "", location: "", description: "", imgUrl: "", likes: 0 })
  const [image, setImage] = useState(false)

  const handleChange = (params) => (e) => {
    setForm({ ...form, [params]: e.target.value })
  }

  const navigate = useNavigate()

  const postData = async () => {
    let trimName = form.author
      .split(' ')
      .filter((i) => i !== '')
      .map((i) => i[0].toUpperCase() + i.substring(1).toLowerCase())
      .join(' ');
    let trimLocation = form.location
      .split(' ')
      .filter((i) => i !== '')
      .map((i) => i[0].toUpperCase() + i.substring(1).toLowerCase())
      .join(' ')
    setForm({...form, author: trimName, location: trimLocation})
    await axios.post("https://instaketan-server.onrender.com/post", form)
    .then((res) => {
      console.log(res)
      navigate("/post-view")
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const imgCloudUpload = async (e) => {
    e.preventDefault()
    if(!form.author || !form.location || !form.description){
      return toast.error("Author, Location & Description are mandatory Fields !")
    }
    else if(!image){
      return toast.error("No Image Chosen !")
    }
    form.id = nanoid()
    form.date = moment().format("DD MMM YYYY")
    const imgData = new FormData()
    imgData.append("file", image)
    imgData.append("upload_preset", "ketanInstaClone")
    await axios.post("https://api.cloudinary.com/v1_1/ketantb/image/upload", imgData)
    .then((res) => {
      setForm({...form, imgUrl: res.data.url})
    })
    .catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    if(form.imgUrl){
      postData()
    }
  }, [form.imgUrl])

  return (
    <>
      <Header />
      <section className="post-form">
        <div>
          <form onSubmit={postData}>
            <div>
              <input type="file" id="myFile" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
            </div>
            <div>
              <div className="Author-Location">
                <input type="text" id="author" placeholder="Author" name="author" onChange={handleChange("author")} maxLength={20} value={form.author}/>
              </div>
              <div className="Author-Location">
                <input type="text" id="location" placeholder="Location" name="location" onChange={handleChange("location")} maxLength={20} value={form.location}/>
              </div>
            </div>
            <div>
              <input type="text" id="description" maxLength={250} placeholder="Description" name="description" onChange={handleChange("description")} value={form.description}/>
            </div>
            <div id="post-btn-parent">
              <button id="post-btn" onClick={imgCloudUpload}>
                  Post
              </button>
            </div>
          </form>
        </div>
      </section>
      <ToastContainer
        autoClose={1500}
        transition={Slide}
        limit={5}
        theme={"light"}
        pauseOnFocusLoss={false}
        position={"bottom-center"}
      />
    </>
  )
}

export default PostForm;