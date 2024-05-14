import React from 'react';


const ContactUs = () => {

    return (
        <div style={{margin:'50px 0'}}>
            <div class="container-contactus">
                <div class="grid-contactus">
                    <div>
                        <div class="form-container">
                            <h2 class="section-title">Contact Us</h2>
                            <form>
                                <div class="form-group">
                                    <label for="name" class="label">Name</label>
                                    <input type="text" id="name" name="name" required class="input" />
                                </div>
                                <div class="form-group">
                                    <label for="email" class="label">Email</label>
                                    <input type="email" id="email" name="email" required class="input" />
                                </div>
                                <div class="form-group">
                                    <label for="message" class="label">Message</label>
                                    <textarea id="message" name="message" rows="4" required class="textarea"></textarea>
                                </div>
                                <button type="submit" class="submit-btn" style={{border:'none', backgroundColor:'#90E051'}}>Submit</button>
                            </form>
                        </div>
                    </div>
                    <div class="contact-info-container">
                        <div class="contact-info">
                            <h2 class="section-title">Contact Information</h2>
                            <p class="info"><span class="info-label">Address:</span> Pizza Uno Sunderland 51 St. Lukes Terrace, Sunderland SR4 6NF</p>
                            <p class="info"><span class="info-label">Telephone:</span> 01915100176</p>
                        </div>
                        <div class="follow-us">
                            <h2 class="section-title">Follow Us</h2>
                            <div class="social-icons">
                                <a href="#" class="social-icon"> FaceBook</a>
                                <a href="#" class="social-icon"> Instagram</a>
                                <a href="#" class="social-icon"> Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;

