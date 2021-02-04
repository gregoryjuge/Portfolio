import React from "react";
import "../css/contact.css";

function Contact() {
  return (
    <section id="contact">
      
      <h1 class="section-header">CONTACT</h1>
      <div className="form-container">
        <input
          type="text"
          class="form-control"
          id="name"
          placeholder="Noms & Prénoms"
          name="name"
          value=""
          required
        />
        <input
          type="email"
          class="form-control"
          id="email"
          placeholder="E-mail"
          name="email"
          value=""
          required
        />
        <textarea
          class="form-control"
          rows="10"
          placeholder="Description de votre projet"
          name="message"
          required
        ></textarea>

        <button
          class="btn btn-primary send-button"
          id="submit"
          type="submit"
          value="SEND"
        >
          <div class="button">
            <i class="fa fa-paper-plane"></i>
            <span class="send-text">ENVOYER</span>
          </div>
        </button>
      </div>
    </section>
  );
}

export default Contact;
