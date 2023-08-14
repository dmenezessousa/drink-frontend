import { useState, useEffect } from 'react'
import './UpdateUser.css'
import { useNavigate } from 'react-router-dom'
import { Layout } from '../../components'

const UpdateUser = (props) => {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  const onUpdate = async (event) => {
    event.preventDefault()
    const { setUser } = props

  }
} 


export default UpdateUser