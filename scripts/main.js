// this import will transpile sass/scss to css
import "../styles/main.scss";

function TestVite() {
	setTimeout(() => {
		if (import.meta.env.DEV === true) {
			console.log("vite is working!");
		}
		if (import.meta.env.PROD === true) {
			console.log("vite built, and 11ty injected correct script tag");
		}
	}, 400);
}

TestVite();
