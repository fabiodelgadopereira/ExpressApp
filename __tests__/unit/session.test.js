const bcrypt = require("bcryptjs");
const User = require("../../src/app/models/User");

describe("Autenticacao", () => {
  it("receber toque caso se autentique", async () => {
    
    const user = await User.create({
      email: "teste_unitario_user",
      password: "teste_unitario_pass",
    });

    const compareHash = await bcrypt.compare(
      "teste_unitario_pass",
      user.password
    );
    
    expect(compareHash).toBe(true);

    const saida = await User.findOneAndRemove({email:"teste_unitario_user"}); 
  });
});
