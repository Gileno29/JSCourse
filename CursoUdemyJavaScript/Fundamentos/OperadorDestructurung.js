   // novo recurso
   const pessoa={
       nome:'ana',
       idade:5,
       endereco:{
           logradouro:'Rua ABC',
           numero:1000
       }
   }
   const{nome,idade}=pessoa

   console.log(nome,idade);

   const{nome:n, idade:i}=pessoa;
   conso.log(n,1);
   const{sobrenome,bemHumorada=true}=pessoa;
   console.log(sobrenome,bemHumorada)
   const{endereco:{logradouro,numero, cep}}=pessoa;