export const wait = (time = 0): Promise<void> => new Promise((resolve) => setTimeout(resolve, time));
