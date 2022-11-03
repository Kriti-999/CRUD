import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Add() {

  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("");
  const {id}=useParams()

  const navigate = useNavigate();
  

  function submitForm(e) {
    e.preventDefault();
    axios.post("http://localhost:3001/addtask",{userId:id,data:task,priority:priority}).then(navigate(`/home/${id}`));
  }
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">ADD TASK</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        
        <input
          value={task}
          onChange={(event) => {
            setTask(event.target.value);

          }}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="task"
          placeholder="Enter your task"
        />
        <input
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter priority"
        />
        
        <button
          className="bg-teal-600 outline-none font-bold border text-white border-zinc-400 py-4 pl-4 mt-4"
          type="submit"
          onClick={submitForm}
        >
          ADD TASK
        </button>
      </form>
    </div>
  );
}

export default Add;
