const Contact = () => {
  return (
    <div className="container mt-4">
      <h2>Contact Us</h2>
      <form className="w-50">
        <input className="form-control my-2" placeholder="Your Name" required />
        <input className="form-control my-2" placeholder="Your Email" required />
        <textarea className="form-control my-2" placeholder="Message" required></textarea>
        <button className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};
export default Contact;