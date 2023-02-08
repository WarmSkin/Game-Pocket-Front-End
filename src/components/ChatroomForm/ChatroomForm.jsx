const ChatroomForm = ({ handleCreateChatroom, handleChange, chatroomInput }) => {
  return (
    <>
      <form
      autoComplete='off'
      onSubmit={handleCreateChatroom}
      >
        <div>
          <label htmlFor="name">Create a chatroom: </label>
          <input
            type="text"
            name='name'
            onChange={handleChange}
            value={chatroomInput.name}
          />
          <button>Create</button>
        </div>
      </form>
    </>
  )
}

export default ChatroomForm