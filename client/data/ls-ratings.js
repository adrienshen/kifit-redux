// Some initial object if LocalStorage is null to startoff the application.
const sampleRatings = {
	"jazzercise-ara-damansara-10": { rating: 649 },
	"vibez-dance-&-fitness-studio-1": { rating: 178 }
}

export const loadRatings = () => {
	try{
		const serialRatings = localStorage.getItem('ratings');
		if (serialRatings === null) {
			return sampleRatings;
		}
		return JSON.parse(serialRatings);
	}catch (err) {
		return sampleRatings;
	}
};

export const updateRatings = (state)=> {
	try {
		const serialRatings = JSON.stringify(state);
		localStorage.setItem('ratings', serialRatings);
	}catch (err) {
		// ignore.
		console.log('Exception updating local storage.');
	}
}
