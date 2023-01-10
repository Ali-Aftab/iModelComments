const getImodel = async (req, res) => {
  try {
    const { id } = req.body;
    const { data } = await axios.get(`https://api.bentley.com/imodels/${id}`);
    req.iModel = data;
  } catch (error) {
    return res.status(400).json({ message: "iModel cannot be found" });
  }
};
module.exports = { getImodel };
