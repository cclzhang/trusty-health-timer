

function SetTimer() {
  return (
    <form>
      <input type="text" name="hrs" id="hrs" placeholder="8"/>
      <label htmlFor="hrs">hours</label>
      <input type="text" name="mins" id="mins" placeholder="30" />
      <label htmlFor="mins">mins</label>
    </form>
  );
}

export default SetTimer;