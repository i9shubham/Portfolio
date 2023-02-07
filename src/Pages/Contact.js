import Footer from "../Components/Footer"
import "./Contact.css"

const Contact = () =>{
    return(
        <>
            <div id="contact">
            <div>
            <h1 className="bold centre feedback">Questions and Feedbacks are welcome</h1>
            <a href="mailto:ishubham158@gmail.com" className="pc heading bold centre feedback">ishubham158@gmail.com</a>
            </div>
                <form className="contact-form mobile" action="mailto:ishubham158@gmail.com" method="POST" enctype="text/plain">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Name" required />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" rows="5" placeholder="Message" required />
                    </div>
                    <input type="submit" className="btn" value="Submit" />
                </form>
            </div>
            <Footer />
        </>
    )
}
export default Contact