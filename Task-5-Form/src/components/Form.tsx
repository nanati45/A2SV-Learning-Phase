import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
interface Forms {
  name: string;
  email: string;
  message: string;
}
const Form = () => {
  const form = useForm<Forms>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: Forms) => {
    console.log(data);
  };
  return (
    <>
    
      <h1>Contact Us</h1>
    <div className="container">
      <form
        className="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="first">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              {...register("name", {
                required: { value: true, message: "Name is required" },
              })}
            />
            <p className="error">{errors.name?.message}</p>
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: { value: true, message: "Email is required" },

                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
            />
            <p className="error">{errors.email?.message}</p>
          </div>
        </div>
        <div >
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            {...register("message", {
              required: { value: true, message: "Message is required" },
            })}
          ></textarea>
          <p className="error">{errors.message?.message}</p>
        </div>

        <button className="send-button" type="submit">Send</button>
        <DevTool control={control} />
      </form>
    </div>
    </>
  );
};

export default Form;
