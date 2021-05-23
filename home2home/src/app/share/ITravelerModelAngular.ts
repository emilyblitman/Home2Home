interface ITravelerModelAngular {
  userId: number,
  fName: string,
  lName: string,
  password: string,
  email: string,
  phoneNumber: string,
  locationPreferences: [string],
  datePreferences: [Date],
  properties: number,
}

export default ITravelerModelAngular;
