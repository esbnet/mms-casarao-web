// "use client"
import AddUserForm from "../addUserForm"
import UpdateUserForm from "../updateUserForm"

export default function Form() {
  const flag = true

  return (
    <div className='container mx-auto mb-4'>
      {flag ? <AddUserForm /> : <UpdateUserForm />}
    </div>
  )
}
