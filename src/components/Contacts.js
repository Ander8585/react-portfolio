import React, { useState } from "react";
import "./Contacts.css";
import {
	contactInfo,
	contactsSectionTitle,
	formTextInfo,
} from "../data/dataInfo";

const ContactCards = () => {
	return (
		<article className="contact-cards">
			<aside className="contact-card box-shadow-1">
				<svg
					width="37"
					height="28"
					viewBox="0 0 37 28"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M18.5 7.3125L7 16.8125V27C7 27.5625 7.4375 28 8 28H15C15.5 28 15.9375 27.5625 15.9375 27V21C15.9375 20.5 16.4375 20 16.9375 20H20.9375C21.5 20 21.9375 20.5 21.9375 21V27C21.9375 27.5625 22.4375 28 22.9375 28H30C30.5 28 31 27.5625 31 27V16.75L19.4375 7.3125C19.3125 7.1875 19.125 7.125 19 7.125C18.8125 7.125 18.625 7.1875 18.5 7.3125ZM36.6875 13.75L31.5 9.4375V0.8125C31.5 0.375 31.125 0.0625 30.75 0.0625H27.25C26.8125 0.0625 26.5 0.375 26.5 0.8125V5.3125L20.875 0.6875C20.375 0.3125 19.6875 0.0625 19 0.0625C18.25 0.0625 17.5625 0.3125 17.0625 0.6875L1.25 13.75C1.0625 13.875 0.9375 14.125 0.9375 14.3125C0.9375 14.5 1.0625 14.6875 1.125 14.8125L2.75 16.75C2.875 16.9375 3.0625 17 3.3125 17C3.5 17 3.6875 16.9375 3.8125 16.8125L18.5 4.75C18.625 4.625 18.8125 4.5625 19 4.5625C19.125 4.5625 19.3125 4.625 19.4375 4.75L34.125 16.8125C34.25 16.9375 34.4375 17 34.625 17C34.875 17 35.0625 16.9375 35.1875 16.75L36.8125 14.8125C36.9375 14.6875 37 14.5 37 14.3125C37 14.125 36.875 13.875 36.6875 13.75Z" />
				</svg>
				<h5>{contactInfo.localAddressTitle}</h5>
				<small>{contactInfo.localAddress}</small>
			</aside>
			<aside className="contact-card box-shadow-1">
				<svg
					width="33"
					height="32"
					viewBox="0 0 33 32"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M31.8125 1.5625L25.3125 0.0625C24.625 -0.125 23.875 0.25 23.5625 0.9375L20.5625 7.9375C20.3125 8.5625 20.5 9.25 21 9.6875L24.8125 12.8125C22.5625 17.5625 18.625 21.5625 13.75 23.875L10.625 20.0625C10.1875 19.5625 9.5 19.375 8.875 19.625L1.875 22.625C1.1875 22.9375 0.875 23.6875 1 24.375L2.5 30.875C2.6875 31.5625 3.25 32 4 32C20 32 33 19.0625 33 3C33 2.3125 32.5 1.75 31.8125 1.5625Z" />
				</svg>
				<h5>{contactInfo.telTitle}</h5>
				<small>
					<a href={`tel:${contactInfo.tel}`}>{contactInfo.tel}</a>
				</small>
			</aside>
			<aside className="contact-card box-shadow-1">
				<svg
					width="32"
					height="24"
					viewBox="0 0 32 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M31.375 7.9375C29.9375 9.0625 28.125 10.4375 21.75 15.0625C20.5 16 18.1875 18.0625 16 18.0625C13.75 18.0625 11.5 16 10.1875 15.0625C3.8125 10.4375 2 9.0625 0.5625 7.9375C0.3125 7.75 0 7.9375 0 8.25V21C0 22.6875 1.3125 24 3 24H29C30.625 24 32 22.6875 32 21V8.25C32 7.9375 31.625 7.75 31.375 7.9375ZM16 16C17.4375 16.0625 19.5 14.1875 20.5625 13.4375C28.875 7.4375 29.5 6.875 31.375 5.375C31.75 5.125 32 4.6875 32 4.1875V3C32 1.375 30.625 0 29 0H3C1.3125 0 0 1.375 0 3V4.1875C0 4.6875 0.1875 5.125 0.5625 5.375C2.4375 6.875 3.0625 7.4375 11.375 13.4375C12.4375 14.1875 14.5 16.0625 16 16Z" />
				</svg>
				<h5>{contactInfo.emailTitle}</h5>
				<small>
					<a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
				</small>
			</aside>
			<aside className="contact-card box-shadow-1">
				<svg
					width="29"
					height="28"
					viewBox="0 0 29 28"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M28.5 9.4375L28.9375 6.9375C29.0625 6.4375 28.6875 6 28.1875 6H23.5625L24.4375 0.9375C24.5625 0.4375 24.1875 0 23.6875 0H21.1875C20.8125 0 20.5 0.3125 20.4375 0.625L19.5 6H13.3125L14.25 0.9375C14.3125 0.4375 13.9375 0 13.5 0H10.9375C10.5625 0 10.25 0.3125 10.1875 0.625L9.25 6H4.3125C3.9375 6 3.625 6.3125 3.5625 6.625L3.125 9.125C3.0625 9.625 3.375 10 3.875 10H8.5625L7.125 18H2.1875C1.8125 18 1.5 18.3125 1.4375 18.625L1 21.125C0.875 21.625 1.25 22 1.75 22H6.375L5.5 27.125C5.375 27.625 5.75 28 6.25 28H8.75C9.125 28 9.4375 27.75 9.5 27.4375L10.4375 22H16.625L15.6875 27.125C15.625 27.625 16 28 16.4375 28H19C19.375 28 19.6875 27.75 19.75 27.4375L20.6875 22H25.625C26 22 26.3125 21.75 26.375 21.4375L26.8125 18.9375C26.875 18.4375 26.5625 18 26.0625 18H21.375L22.8125 10H27.75C28.125 10 28.4375 9.75 28.5 9.4375ZM17.3125 18H11.1875L12.625 10H18.75L17.3125 18Z" />
				</svg>
				<h5>{contactInfo.socialMediaTitle}</h5>
				<small className="social-media">
					{Object.entries(contactInfo.socialMedia).map((el) => (
						<a key={el[0]} href={el[1].href} target="_blank" rel="noreferrer">
							{el[1].img}
						</a>
					))}
				</small>
			</aside>
		</article>
	);
};

const Contacts = () => {
	const [isModal, setIsModal] = useState(false);
	const [isLoader, setIsLoader] = useState(false);
	const [isError, setIsError] = useState(false);
	const [form, setForm] = useState({});

	const formChange = (e) => {
		e.preventDefault();
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const submit = (e) => {
		e.preventDefault();
		setIsLoader(true);
		fetch("https://formsubmit.co/ajax/ander8585@gmail.com", {
			method: "POST",
			body: new FormData(e.target),
		})
			.then((res) => (res.ok ? res.json() : Promise.reject(res)))
			.then((json) => {
				//console.log(json);
				setIsModal(true);
				setForm({}); //reset all input handled by the state variable (form)
				e.target.reset(); //reset the textArea cause it's not handled by the state variable (form)
			})
			.catch((err) => {
				console.log(err);
				setIsError(true);
				setTimeout(() => {
					setIsError(false);
				}, 3000);
			})
			.finally(() => {
				setIsLoader(false);
				setTimeout(() => {
					setIsModal(false);
				}, 3000);
			});
	};

	return (
		<section id="contacts" className="contacts section">
			<div className="my-container">
				<h2 className="section-title">{contactsSectionTitle}</h2>
				<ContactCards />
				<form className="contact-form box-shadow-1" onSubmit={submit}>
					<input
						type="text"
						name="name"
						placeholder={formTextInfo.namePHolderText}
						title={formTextInfo.nameTitleErrorText}
						pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
						required
						value={form.name}
						onChange={formChange}
					/>
					<input
						type="email"
						name="email"
						placeholder={formTextInfo.emailPHolderText}
						title={formTextInfo.emailTitleErrorText}
						pattern="^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$"
						required
						value={form.email}
						onChange={formChange}
					/>
					<textarea
						name="comments"
						id=""
						cols="30"
						rows="10"
						placeholder={formTextInfo.commentsPHolderText}
						required
						onChange={formChange}
					>
						{form.comments}
					</textarea>
					{isLoader && (
						<div className="contact-form-loader text-center none">
							<svg
								width="65"
								height="65"
								viewBox="-2 -2 58 53"
								xmlns="http://www.w3.org/2000/svg"
								stroke="#ff4d29"
							>
								<g fill="none" fillRule="evenodd">
									<g transform="translate(1 1)" stroke-width="5">
										<circle stroke-opacity=".5" cx="25" cy="25" r="25" />
										<path d="M50 25c0-9.94-8.06-25-25-25">
											<animateTransform
												attributeName="transform"
												type="rotate"
												from="0 25 25"
												to="360 25 25"
												dur="1s"
												repeatCount="indefinite"
											/>
										</path>
									</g>
								</g>
							</svg>
						</div>
					)}
					<input
						className="my-btn"
						type="submit"
						value={formTextInfo.submitButtonText}
					/>
				</form>
				{isModal && (
					<article id="thkyou" className="modal">
						<div className="modal-content">
							<article className="contact-form-response">
								<h3>{formTextInfo.answerModalText}</h3>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="40"
									height="40"
									viewBox="0 0 24 24"
								>
									<path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z" />
									<path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z" />
									<path d="M13 12l2 .012C15.012 11.55 15.194 11 16 11s.988.55 1 1h2c0-1.206-.799-3-3-3S13 10.794 13 12zM8 11c.806 0 .988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3l2 .012C7.012 11.55 7.194 11 8 11z" />
								</svg>
							</article>
						</div>
					</article>
				)}
				{isError && (
					<article id="Error" className="modal">
						<div className="modal-content">
							<article className="contact-form-response">
								<h3>{formTextInfo.answerErrorModalText}</h3>
								<svg
									className="svg-error"
									width="40"
									height="40"
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="exclamation-circle"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path>
								</svg>
							</article>
						</div>
					</article>
				)}
			</div>
		</section>
	);
};

export default Contacts;
