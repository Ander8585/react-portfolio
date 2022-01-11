const Logo = ({
	customizedWidth = "58",
	customizedHeight = "35",
	color = "currentColor",
}) => {
	return (
		<div className="logo">
			<a href="https://ander8585.github.io/General_portfolio/index.html">
				<svg
					viewBox="0 0 404 286"
					xmlns="http://www.w3.org/2000/svg"
					width={customizedWidth}
					height={customizedHeight}
					fill={color}
				>
					<mask id="path-1-inside-1_30842_590" fill="white">
						<path d="M261.935 185.581C263.901 187.206 264.863 189.314 264.821 191.903C264.779 194.493 263.847 196.669 262.025 198.433L219.6 197.745L235.71 254.788C236.086 256.189 236.256 257.985 236.22 260.176C236.185 262.367 234.747 265.033 231.907 268.175C229.067 271.316 226.153 272.863 223.165 272.815C217.588 272.724 213.229 271.259 210.087 268.419L190.021 197.266L113.834 196.032L98.2375 236.423C92.8361 250.082 85.1748 261.813 75.2536 271.614C65.3323 281.414 52.6036 286.189 37.0675 285.937C25.3158 285.747 16.2035 282.511 9.73051 276.23C3.05838 269.946 -0.182477 260.928 0.00792406 249.176C0.198326 237.424 3.25749 226.914 9.18543 217.646C14.9174 208.176 22.5077 200.828 31.9564 195.602C50.8537 185.149 71.8549 180.11 94.9599 180.485L140.575 58.0972C142.66 52.3532 144.821 48.1047 147.057 45.3517C141.218 24.5368 138.315 13.1334 138.347 11.1416C138.383 8.95061 139.816 6.58303 142.646 4.03885C145.679 1.29872 148.689 -0.0471466 151.677 0.00126047C157.453 0.0948477 161.912 1.56173 165.054 4.4019L215.066 182.43L254.21 182.766C257.596 182.821 260.171 183.759 261.935 185.581ZM37.2708 273.389C52.2094 273.631 65.3998 258.802 76.8421 228.904L89.0315 195.929C67.1216 195.574 49.6093 200.47 36.4947 210.618C23.5793 220.769 16.9844 234.309 16.7101 251.24C16.5972 258.211 18.4023 263.62 22.1254 267.465C26.0477 271.314 31.0962 273.289 37.2708 273.389ZM158.038 68.5411L119.758 180.886L185.488 181.951L158.038 68.5411Z" />
						<path d="M297.578 116.763C297.257 108.9 307.097 105.115 312.128 111.167L338.862 143.326C341.117 146.039 344.851 147.013 348.144 145.746L387.95 130.436C395.466 127.545 402.232 136.055 397.721 142.726L374.556 176.983C372.506 180.015 372.705 184.038 375.045 186.853L401.148 218.253C406.225 224.36 400.56 233.405 392.849 231.503L351.147 221.216C347.799 220.39 344.291 221.739 342.36 224.595L318.3 260.176C313.851 266.755 303.585 263.837 303.261 255.902L301.595 215.103C301.445 211.446 298.897 208.326 295.343 207.45L255.193 197.545C247.375 195.616 246.694 184.766 254.21 181.875L294.017 166.565C297.309 165.298 299.429 162.074 299.285 158.548L297.578 116.763Z" />
					</mask>
					<path
						d="M261.935 185.581L247.154 199.89L247.947 200.709L248.825 201.435L261.935 185.581ZM264.821 191.903L244.251 191.57L264.821 191.903ZM262.025 198.433L261.692 219.003L270.212 219.141L276.335 213.213L262.025 198.433ZM219.6 197.745L219.933 177.175L192.286 176.728L199.802 203.337L219.6 197.745ZM235.71 254.788L255.58 249.457L255.545 249.327L255.508 249.196L235.71 254.788ZM236.22 260.176L256.79 260.509L236.22 260.176ZM223.165 272.815L223.498 252.245L223.165 272.815ZM210.087 268.419L190.287 274.003L191.895 279.706L196.291 283.68L210.087 268.419ZM190.021 197.266L209.822 191.682L205.665 176.944L190.355 176.696L190.021 197.266ZM113.834 196.032L114.168 175.462L99.8142 175.229L94.643 188.621L113.834 196.032ZM98.2375 236.423L117.369 243.988L117.399 243.911L117.429 243.833L98.2375 236.423ZM75.2536 271.614L89.7116 286.249L89.7116 286.249L75.2536 271.614ZM37.0675 285.937L37.4007 265.367L37.0675 285.937ZM9.73051 276.23L24.0571 261.466L23.9472 261.359L23.8358 261.254L9.73051 276.23ZM0.00792406 249.176L20.5778 249.509L0.00792406 249.176ZM9.18543 217.646L26.5161 228.732L26.6534 228.517L26.7853 228.299L9.18543 217.646ZM31.9564 195.602L21.999 177.599L21.999 177.599L31.9564 195.602ZM94.9599 180.485L94.6266 201.054L109.161 201.29L114.237 187.669L94.9599 180.485ZM140.575 58.0972L159.852 65.282L159.883 65.2001L159.913 65.1179L140.575 58.0972ZM147.057 45.3517L163.026 58.3223L169.743 50.0528L166.865 39.7951L147.057 45.3517ZM138.347 11.1416L117.777 10.8083L138.347 11.1416ZM142.646 4.03885L156.399 19.3391L156.418 19.3216L156.438 19.304L142.646 4.03885ZM151.677 0.00126047L152.01 -20.5686L151.677 0.00126047ZM165.054 4.4019L184.86 -1.16201L183.254 -6.87769L178.85 -10.859L165.054 4.4019ZM215.066 182.43L195.26 187.994L199.439 202.87L214.89 203.002L215.066 182.43ZM254.21 182.766L254.544 162.196L254.465 162.195L254.386 162.194L254.21 182.766ZM37.2708 273.389L37.6041 252.819L37.2708 273.389ZM76.8421 228.904L96.0557 236.257L96.0977 236.147L96.1385 236.037L76.8421 228.904ZM89.0315 195.929L108.328 203.062L118.395 175.829L89.3648 175.359L89.0315 195.929ZM36.4947 210.618L23.905 194.347L23.8434 194.395L23.7821 194.443L36.4947 210.618ZM16.7101 251.24L37.28 251.573L16.7101 251.24ZM22.1254 267.465L7.34463 281.775L7.52805 281.964L7.71627 282.149L22.1254 267.465ZM158.038 68.5411L178.033 63.7014L161.387 -5.07325L138.565 61.9059L158.038 68.5411ZM119.758 180.886L100.285 174.251L91.1711 200.998L119.425 201.456L119.758 180.886ZM185.488 181.951L185.155 202.521L211.737 202.952L205.483 177.112L185.488 181.951ZM294.017 166.565L286.631 147.364L286.631 147.364L294.017 166.565ZM299.285 158.548L278.729 159.388L278.729 159.388L299.285 158.548ZM255.193 197.545L260.121 177.571L260.121 177.571L255.193 197.545ZM254.21 181.875L261.595 201.076L261.595 201.076L254.21 181.875ZM301.595 215.103L281.039 215.943L281.039 215.943L301.595 215.103ZM295.343 207.45L290.416 227.423L290.416 227.423L295.343 207.45ZM318.3 260.176L301.258 248.651L301.258 248.651L318.3 260.176ZM303.261 255.902L323.816 255.062L323.816 255.062L303.261 255.902ZM351.147 221.216L356.075 201.242L356.075 201.242L351.147 221.216ZM342.36 224.595L359.402 236.12L359.402 236.12L342.36 224.595ZM401.148 218.253L416.968 205.101L416.968 205.101L401.148 218.253ZM392.849 231.503L387.921 251.476L387.921 251.476L392.849 231.503ZM374.556 176.983L391.598 188.507L391.598 188.507L374.556 176.983ZM375.045 186.853L359.225 200.004L359.225 200.004L375.045 186.853ZM387.95 130.436L380.565 111.235L380.565 111.235L387.95 130.436ZM397.721 142.726L380.679 131.202L380.679 131.202L397.721 142.726ZM338.862 143.326L323.042 156.477L323.042 156.477L338.862 143.326ZM348.144 145.746L355.529 164.948L355.529 164.948L348.144 145.746ZM312.128 111.167L327.948 98.0159L327.948 98.0159L312.128 111.167ZM297.578 116.763L318.133 115.924L318.133 115.924L297.578 116.763ZM248.825 201.435C247.656 200.469 246.352 198.976 245.416 196.923C244.483 194.881 244.228 192.972 244.251 191.57L285.391 192.237C285.532 183.509 281.911 175.405 275.045 169.727L248.825 201.435ZM244.251 191.57C244.269 190.446 244.498 188.97 245.178 187.381C245.862 185.783 246.805 184.534 247.716 183.652L276.335 213.213C282.17 207.565 285.262 200.151 285.391 192.237L244.251 191.57ZM262.359 177.863L219.933 177.175L219.266 218.315L261.692 219.003L262.359 177.863ZM199.802 203.337L215.912 260.379L255.508 249.196L239.398 192.154L199.802 203.337ZM215.84 260.118C215.751 259.786 215.701 259.532 215.674 259.376C215.647 259.218 215.639 259.131 215.639 259.126C215.638 259.12 215.643 259.176 215.648 259.301C215.652 259.425 215.654 259.604 215.651 259.842L256.79 260.509C256.843 257.276 256.635 253.389 255.58 249.457L215.84 260.118ZM215.651 259.842C215.703 256.627 216.729 254.572 217.008 254.054C217.314 253.487 217.361 253.587 216.646 254.378L247.168 281.971C250.649 278.121 256.627 270.608 256.79 260.509L215.651 259.842ZM216.646 254.378C216.396 254.654 216.788 254.134 217.946 253.519C219.233 252.836 221.165 252.207 223.498 252.245L222.832 293.384C233.901 293.564 242.063 287.617 247.168 281.971L216.646 254.378ZM223.498 252.245C222.392 252.227 222.067 252.08 222.267 252.147C222.377 252.184 222.607 252.273 222.913 252.449C223.222 252.626 223.556 252.862 223.883 253.158L196.291 283.68C204.169 290.801 213.879 293.239 222.832 293.384L223.498 252.245ZM229.887 262.835L209.822 191.682L170.221 202.85L190.287 274.003L229.887 262.835ZM190.355 176.696L114.168 175.462L113.501 216.602L189.688 217.836L190.355 176.696ZM94.643 188.621L79.0461 229.012L117.429 243.833L133.026 203.442L94.643 188.621ZM79.1063 228.858C74.698 240.006 68.5777 249.29 60.7956 256.978L89.7116 286.249C101.772 274.335 110.974 260.159 117.369 243.988L79.1063 228.858ZM60.7956 256.978C55.2743 262.432 48.1024 265.541 37.4007 265.367L36.7342 306.507C57.1048 306.837 75.3903 300.397 89.7116 286.249L60.7956 256.978ZM37.4007 265.367C29.2459 265.235 25.7444 263.103 24.0571 261.466L-4.59609 290.994C6.66251 301.919 21.3857 306.259 36.7342 306.507L37.4007 265.367ZM23.8358 261.254C22.492 259.989 20.453 257.212 20.5778 249.509L-20.562 248.843C-20.818 264.644 -16.3753 279.903 -4.3748 291.206L23.8358 261.254ZM20.5778 249.509C20.7108 241.301 22.7856 234.564 26.5161 228.732L-8.14527 206.561C-16.2706 219.265 -20.3141 233.548 -20.562 248.843L20.5778 249.509ZM26.7853 228.299C30.7049 221.823 35.693 217.045 41.9138 213.604L21.999 177.599C9.32246 184.611 -0.87004 194.529 -8.41447 206.994L26.7853 228.299ZM41.9138 213.604C57.4438 205.014 74.8567 200.734 94.6266 201.054L95.2932 159.915C68.8531 159.486 44.2636 165.284 21.999 177.599L41.9138 213.604ZM114.237 187.669L159.852 65.282L121.298 50.9124L75.6827 173.3L114.237 187.669ZM159.913 65.1179C160.744 62.8266 161.485 61.1321 162.097 59.9291C162.728 58.6886 163.075 58.2619 163.026 58.3223L131.089 32.3811C126.726 37.7527 123.625 44.499 121.237 51.0766L159.913 65.1179ZM166.865 39.7951C163.96 29.4392 161.827 21.5721 160.437 16.112C159.737 13.3631 159.268 11.3897 158.989 10.0886C158.848 9.42832 158.792 9.11335 158.782 9.04986C158.714 8.62587 158.945 9.77033 158.917 11.4749L117.777 10.8083C117.724 14.1206 118.533 17.6648 118.758 18.7117C119.197 20.7594 119.812 23.3112 120.564 26.2639C122.077 32.2072 124.315 40.4492 127.249 50.9082L166.865 39.7951ZM158.917 11.4749C158.862 14.8616 157.729 17.2503 157.049 18.3751C156.408 19.4328 155.967 19.7277 156.399 19.3391L128.894 -11.2614C124.752 -7.53846 117.955 -0.12322 117.777 10.8083L158.917 11.4749ZM156.438 19.304C156.72 19.0494 156.449 19.365 155.575 19.7554C154.623 20.1811 153.155 20.6005 151.344 20.5711L152.01 -20.5686C142.15 -20.7284 134.313 -16.1578 128.855 -11.2263L156.438 19.304ZM151.344 20.5711C152.619 20.5918 153.057 20.7572 152.925 20.7139C152.846 20.6878 152.623 20.6061 152.308 20.4279C151.989 20.2468 151.625 19.9944 151.258 19.6628L178.85 -10.859C170.853 -18.0887 160.947 -20.4238 152.01 -20.5686L151.344 20.5711ZM145.248 9.96581L195.26 187.994L234.872 176.867L184.86 -1.16201L145.248 9.96581ZM214.89 203.002L254.034 203.338L254.386 162.194L215.243 161.859L214.89 203.002ZM253.877 203.336C253.799 203.334 252.941 203.315 251.637 202.84C250.24 202.331 248.61 201.394 247.154 199.89L276.716 171.271C270.018 164.353 261.495 162.309 254.544 162.196L253.877 203.336ZM36.9375 293.959C52.2062 294.206 64.548 286.454 73.7388 276.122C82.6869 266.063 89.9231 252.281 96.0557 236.257L57.6285 221.551C52.3188 235.425 47.2387 244.007 42.9964 248.776C40.9632 251.062 39.4776 252.066 38.6765 252.482C37.9981 252.833 37.7239 252.821 37.6041 252.819L36.9375 293.959ZM96.1385 236.037L108.328 203.062L69.7351 188.796L57.5457 221.771L96.1385 236.037ZM89.3648 175.359C64.2918 174.953 41.7525 180.537 23.905 194.347L49.0844 226.888C57.4661 220.403 69.9514 216.195 88.6983 216.499L89.3648 175.359ZM23.7821 194.443C5.82508 208.556 -3.48867 228.003 -3.85976 250.906L37.28 251.573C37.4575 240.616 41.3335 232.981 49.2073 226.792L23.7821 194.443ZM-3.85976 250.906C-4.03324 261.614 -1.22232 272.926 7.34463 281.775L36.9061 253.156C37.0848 253.34 37.2385 253.544 37.354 253.738C37.4672 253.927 37.5018 254.036 37.4937 254.012C37.4706 253.943 37.2531 253.233 37.28 251.573L-3.85976 250.906ZM7.71627 282.149C15.8787 290.159 26.1969 293.785 36.9375 293.959L37.6041 252.819C36.631 252.803 36.293 252.653 36.3469 252.674C36.3642 252.68 36.4169 252.704 36.4799 252.745C36.5424 252.786 36.5616 252.808 36.5345 252.782L7.71627 282.149ZM138.565 61.9059L100.285 174.251L139.231 187.521L177.511 75.1763L138.565 61.9059ZM119.425 201.456L185.155 202.521L185.821 161.381L120.091 160.316L119.425 201.456ZM205.483 177.112L178.033 63.7014L138.043 73.3807L165.493 186.791L205.483 177.112ZM296.308 124.318L323.042 156.477L354.682 130.175L327.948 98.0159L296.308 124.318ZM355.529 164.948L395.336 149.637L380.565 111.235L340.759 126.545L355.529 164.948ZM380.679 131.202L357.515 165.459L391.598 188.507L414.763 154.25L380.679 131.202ZM359.225 200.004L385.327 231.404L416.968 205.101L390.865 173.702L359.225 200.004ZM397.776 211.529L356.075 201.242L346.22 241.189L387.921 251.476L397.776 211.529ZM325.318 213.071L301.258 248.651L335.342 271.7L359.402 236.12L325.318 213.071ZM323.816 255.062L322.15 214.264L281.039 215.943L282.705 256.741L323.816 255.062ZM300.27 187.476L260.121 177.571L250.266 217.519L290.416 227.423L300.27 187.476ZM261.595 201.076L301.402 185.766L286.631 147.364L246.825 162.674L261.595 201.076ZM319.84 157.709L318.133 115.924L277.023 117.603L278.729 159.388L319.84 157.709ZM301.402 185.766C312.927 181.333 320.344 170.047 319.84 157.709L278.729 159.388C278.513 154.101 281.692 149.263 286.631 147.364L301.402 185.766ZM260.121 177.571C271.848 180.464 272.869 196.74 261.595 201.076L246.825 162.674C220.519 172.792 222.902 210.769 250.266 217.519L260.121 177.571ZM322.15 214.264C321.627 201.462 312.71 190.544 300.27 187.476L290.416 227.423C285.085 226.108 281.263 221.429 281.039 215.943L322.15 214.264ZM301.258 248.651C307.931 238.783 323.33 243.159 323.816 255.062L282.705 256.741C283.84 284.515 319.771 294.726 335.342 271.7L301.258 248.651ZM356.075 201.242C344.356 198.351 332.079 203.074 325.318 213.071L359.402 236.12C356.504 240.404 351.243 242.428 346.22 241.189L356.075 201.242ZM385.327 231.404C377.712 222.243 386.209 208.676 397.776 211.529L387.921 251.476C414.91 258.134 434.737 226.477 416.968 205.101L385.327 231.404ZM357.515 165.459C350.337 176.072 351.034 190.151 359.225 200.004L390.865 173.702C394.376 177.924 394.674 183.958 391.598 188.507L357.515 165.459ZM395.336 149.637C384.062 153.974 373.913 141.208 380.679 131.202L414.763 154.25C430.551 130.903 406.871 101.117 380.565 111.235L395.336 149.637ZM323.042 156.477C330.935 165.973 344.004 169.38 355.529 164.948L340.759 126.545C345.698 124.645 351.299 126.106 354.682 130.175L323.042 156.477ZM327.948 98.0159C310.34 76.8341 275.898 90.0815 277.023 117.603L318.133 115.924C318.615 127.719 303.854 133.396 296.308 124.318L327.948 98.0159Z"
						mask="url(#path-1-inside-1_30842_590)"
						/* fill={color} */
					/>
				</svg>
			</a>
		</div>
	);
};

export default Logo;
