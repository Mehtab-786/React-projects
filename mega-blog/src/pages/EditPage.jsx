import PostForm from '../components/PostForm'
import Container from '../components/container/Container'
import StorageService from '../appwrite/StorageService'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditPage() {
    const [Posts, setPosts] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        if (slug) {
            StorageService.getPost(slug)
            .then((post) => {
                if (post) {
                    setPosts(post)
                }
                else{
                    navigate('/')
                }
            })
        }
    },[slug,navigate])
    
  return Posts ? (
    <Container>
        <PostForm post={Posts} />
    </Container>
  ) : null
}

export default EditPage