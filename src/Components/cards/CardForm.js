import { useState } from "react";

export default function CardForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoyer les données du formulaire
    // console.log(formData);
  };
  // content
  const formFields = [
    { name: "name", placeholder: "Your Name", type: "text" },
    { name: "email", placeholder: "Your Email", type: "email" },
    { name: "subject", placeholder: "Subject", type: "text" },
    { name: "message", placeholder: "Message", type: "textarea" },
  ];

  return (
    <form onSubmit={handleSubmit} className="w-full  lg:w-1/2 lg:px-20 py-10">
      {formFields.map((field) => (
        <div key={field.name} className="mb-4">
          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full px-3 py-2 border border-gray-300 rounded-md resize-none"
              style={{ height: "150px" }}
            ></textarea>
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          )}
        </div>
      ))}
      <button
        type="submit"
        className="bg-yellow-300 hover:bg-yellow-600 text-white py-2 px-4 rounded"
      >
        Send Message
      </button>
    </form>
  );
}
