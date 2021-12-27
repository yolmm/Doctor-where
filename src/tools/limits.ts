export const checkLimits = (position: {x: number, y: number}) => {
	if (
		position.x < 1020 &&
		position.x > 0 &&
		position.y < 1024 &&
		position.y > 0
	) {
		return true;
	}
	return false;
};