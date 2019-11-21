const getJediList = () => [
  {
    id: 1,
    name: 'Obiwan Kenobi',
    email: 'kenoby@st.com',
  },
  {
    id: 2,
    name: 'Yoda',
    email: 'yoda@st.com',
  },
];

class JediController {
  // eslint-disable-next-line class-methods-use-this
  async index(req, res) {
    const {
      pageSize = 24,
      pageNumber = 1,
      name,
      email,
    } = req.query;

    try {
      return res.send({ list: getJediList() });
    } catch (err) {
      return res.status(500).send();
    }
  }
}

export default JediController;
