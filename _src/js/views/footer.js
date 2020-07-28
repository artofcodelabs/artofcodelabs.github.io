class Footer {
  render() {
    const year = new Date().getFullYear();
    document.getElementById('current_year').textContent = year;
  }
}

export default Footer;