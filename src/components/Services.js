import React from "react";
import ServiceCard from "./ServiceCard";

const serviceCardInfoList = (index = "web-programming") => {
	const dataList = {
		"web-programming": {
			logo: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="#fff"
				>
					<path d="M20,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V5C22,3.897,21.103,3,20,3z M4,19V7h16 l0.002,12H4z" />
					<path d="M9.293 9.293L5.586 13 9.293 16.707 10.707 15.293 8.414 13 10.707 10.707zM14.707 9.293L13.293 10.707 15.586 13 13.293 15.293 14.707 16.707 18.414 13z" />
				</svg>
			),
			title: (
				<h3>
					Programación <i>Web</i>
				</h3>
			),
			description: (
				<p>
					Desarrollo de sitios y aplicaciones para plataformas <i>Web</i>.
					Construcción de proyectos de principio a fin: <i>Frontend</i>,
					<i>Backend</i> y Base de Datos.
				</p>
			),
		},
		"web-design": {
			logo: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 24 24"
					fill="#fff"
				>
					<path d="M20,3H7C5.897,3,5,3.897,5,5v2H4C2.897,7,2,7.897,2,9v10c0,1.103,0.897,2,2,2h6c1.103,0,2-0.897,2-2h8c1.103,0,2-0.897,2-2 V5C22,3.897,21.103,3,20,3z M6,9h4l-0.003,9H4V9H6z M12,17V9c0-1.103-0.897-2-2-2H7V5h11v12H12z" />
				</svg>
			),
			title: (
				<h3>
					Diseño <i>Web</i>
				</h3>
			),
			description: (
				<p>
					Prototipado y maquetado de diseños estáticos a<i>web</i> responsivas,
					óptimizadas y accesibles.
				</p>
			),
		},
		"industrial-dev": {
			logo: (
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					xmlns="http://www.w3.org/2000/svg"
					fill="#fff"
				>
					<path d="M3.12534 20.3614L5.792 24.9747C5.96904 25.2807 6.26036 25.5039 6.60191 25.5951C6.94345 25.6864 7.30726 25.6383 7.61334 25.4614L9.47467 24.3867C10.248 24.996 11.1027 25.496 12.0013 25.8694V28C12.0013 28.3536 12.1418 28.6928 12.3919 28.9428C12.6419 29.1929 12.981 29.3334 13.3347 29.3334H18.668C19.0216 29.3334 19.3608 29.1929 19.6108 28.9428C19.8609 28.6928 20.0013 28.3536 20.0013 28V25.8694C20.907 25.4923 21.7571 24.9935 22.528 24.3867L24.3893 25.4614C25.0253 25.828 25.844 25.608 26.2107 24.9747L28.8773 20.3614C29.0528 20.0549 29.1001 19.6916 29.009 19.3505C28.9178 19.0094 28.6956 18.7181 28.3907 18.54L26.5613 17.4827C26.7043 16.4993 26.7034 15.5004 26.5587 14.5174L28.388 13.46C29.0227 13.0934 29.2427 12.2734 28.8747 11.6387L26.208 7.02535C26.031 6.71935 25.7396 6.49618 25.3981 6.40492C25.0566 6.31366 24.6927 6.36177 24.3867 6.53869L22.5253 7.61335C21.7554 7.00586 20.9057 6.50698 20 6.13069V4.00002C20 3.6464 19.8595 3.30726 19.6095 3.05721C19.3594 2.80716 19.0203 2.66669 18.6667 2.66669H13.3333C12.9797 2.66669 12.6406 2.80716 12.3905 3.05721C12.1405 3.30726 12 3.6464 12 4.00002V6.13069C11.0943 6.50777 10.2443 7.00658 9.47334 7.61335L7.61334 6.53869C7.46183 6.45091 7.2945 6.39387 7.12092 6.37082C6.94734 6.34778 6.77093 6.35918 6.60176 6.40439C6.4326 6.44959 6.27401 6.5277 6.13506 6.63425C5.99611 6.7408 5.87954 6.8737 5.792 7.02535L3.12534 11.6387C2.94985 11.9451 2.90253 12.3084 2.99369 12.6496C3.08484 12.9907 3.30707 13.282 3.612 13.46L5.44134 14.5174C5.29752 15.5006 5.29752 16.4995 5.44134 17.4827L3.612 18.54C2.97734 18.9067 2.75734 19.7267 3.12534 20.3614ZM16 10.6667C18.9413 10.6667 21.3333 13.0587 21.3333 16C21.3333 18.9414 18.9413 21.3334 16 21.3334C13.0587 21.3334 10.6667 18.9414 10.6667 16C10.6667 13.0587 13.0587 10.6667 16 10.6667Z" />
				</svg>
			),
			title: <h3>Desarrollo Industrial</h3>,
			description: (
				<p>
					Trabajo industrial especializado en el área de empaquetado, etiquetado
					y marcado. Marcaje y Trazabilidad industrial.
				</p>
			),
		},
		security: {
			logo: (
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					xmlns="http://www.w3.org/2000/svg"
					fill="#fff"
				>
					<path d="M4.57733 23.1L4.10533 26.4C4.07616 26.6048 4.09506 26.8136 4.16053 27.0099C4.22599 27.2061 4.33624 27.3845 4.48253 27.5308C4.62883 27.6771 4.80717 27.7873 5.00343 27.8528C5.19969 27.9183 5.4085 27.9371 5.61333 27.908L8.91333 27.436C9.41333 27.3653 10.6667 24 10.6667 24C10.6667 24 11.296 24.54 11.5533 24.6213C12.1027 24.7946 12.6373 24.256 12.8173 23.7093L13.3333 21.3466C13.3333 21.3466 14.1027 21.736 14.3813 21.7933C14.736 21.8666 15.08 21.648 15.324 21.4026C15.4706 21.2565 15.5807 21.0779 15.6453 20.8813L16 18.68C16 18.68 16.9 18.9293 17.208 18.9653C17.5587 19.0053 17.9 18.8266 18.1507 18.5746L19.668 17.0586C20.9524 17.4749 22.3267 17.5285 23.6397 17.2138C24.9526 16.899 26.1533 16.228 27.1093 15.2746C28.4822 13.8982 29.2532 12.0334 29.2532 10.0893C29.2532 8.14521 28.4822 6.28045 27.1093 4.90398C25.7329 3.53107 23.8681 2.76007 21.924 2.76007C19.9799 2.76007 18.1151 3.53107 16.7387 4.90398C15.7851 5.85988 15.1139 7.06049 14.7991 8.3735C14.4843 9.68652 14.5382 11.0609 14.9547 12.3453L4.95333 22.3453C4.74919 22.5492 4.61717 22.8142 4.57733 23.1ZM24.672 7.34131C25.3994 8.07087 25.8079 9.05908 25.8079 10.0893C25.8079 11.1195 25.3994 12.1078 24.672 12.8373L19.176 7.34131C19.9056 6.6139 20.8938 6.20543 21.924 6.20543C22.9542 6.20543 23.9424 6.6139 24.672 7.34131Z" />
				</svg>
			),
			title: <h3>Criptografía y Seguridad</h3>,
			description: (
				<p>
					Desarrollo de aplicaciones relacionadas con algoritmos criptográficos
					y seguridad de software.
				</p>
			),
		},
		"hardware-dev": {
			logo: (
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					xmlns="http://www.w3.org/2000/svg"
					fill="#fff"
				>
					<path d="M10.6653 29.3333H21.332C22.8027 29.3333 23.9987 28.1373 23.9987 26.6666V5.33329C23.9987 3.86263 22.8027 2.66663 21.332 2.66663H10.6653C9.19467 2.66663 7.99867 3.86263 7.99867 5.33329V26.6666C7.99867 28.1373 9.19467 29.3333 10.6653 29.3333ZM3.99867 9.33329H6.66533V6.66663H3.99867V7.33329H2.66533V8.66663H3.99867V9.33329ZM27.9987 6.66663H25.332V9.33329H27.9987V8.66663H29.332V7.33329H27.9987V6.66663ZM3.99867 14.6666H6.66533V12H3.99867V12.6666H2.66533V14H3.99867V14.6666ZM27.9987 12H25.332V14.6666H27.9987V14H29.332V12.6666H27.9987V12ZM3.99867 20H6.66533V17.3333H3.99867V18H2.66533V19.3333H3.99867V20ZM27.9987 17.3333H25.332V20H27.9987V19.3333H29.332V18H27.9987V17.3333ZM3.99867 25.3333H6.66533V22.6666H3.99867V23.3333H2.66533V24.6666H3.99867V25.3333ZM27.9987 22.6666H25.332V25.3333H27.9987V24.6666H29.332V23.3333H27.9987V22.6666Z" />
				</svg>
			),
			title: (
				<h3>
					Desarrollo de <i>Hardware</i>
				</h3>
			),
			description: (
				<p>
					Soluciones personalizadas con sistemas embebidos, microcontroladores y
					tarjetas inteligentes.
				</p>
			),
		},
		"native-dev": {
			logo: (
				<svg
					width="32"
					height="32"
					viewBox="0 0 32 32"
					xmlns="http://www.w3.org/2000/svg"
					fill="#fff"
				>
					<path d="M26.6667 4H5.33333C3.86266 4 2.66666 5.196 2.66666 6.66667V25.3333C2.66666 26.804 3.86266 28 5.33333 28H26.6667C28.1373 28 29.3333 26.804 29.3333 25.3333V6.66667C29.3333 5.196 28.1373 4 26.6667 4ZM22.6667 8H25.3333V10.6667H22.6667V8ZM18.6667 8H21.3333V10.6667H18.6667V8ZM5.33333 25.3333V13.3333H26.668L26.6693 25.3333H5.33333Z" />
				</svg>
			),
			title: <h3>Desarrollo Nativo</h3>,
			description: (
				<p>Aplicaciones multiplataformas para IOS, Android y Windows.</p>
			),
		},
	};
	return dataList[index];
};

const Services = () => {
	return (
		<section id="services" className="services section bg-gray-light-color">
			<div className="my-container lg:w-full lg:min-h-screen">
				<h2 className="section-title">¿Qué te ofrezco?</h2>
				<ServiceCard children={serviceCardInfoList("web-programming")} />
				<ServiceCard children={serviceCardInfoList("web-design")} />
				<ServiceCard children={serviceCardInfoList("industrial-dev")} />
				<ServiceCard children={serviceCardInfoList("security")} />
				<ServiceCard children={serviceCardInfoList("hardware-dev")} />
				<ServiceCard children={serviceCardInfoList("native-dev")} />
			</div>
		</section>
	);
};

export default Services;
