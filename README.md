# iOrder
Em um restaurante/lanchonete há a necessidade de ter uma interação rápida, de qualidade para a solicitação de pedidos dos seus clientes, levando ao cliente a liberdade de poder fazer o próprio pedido, adicionando ou removendo tudo itens que desejar e ainda ter uma esmativa de demora e valor total. Não é bacana? :)
O objetivo é fazer a experiência do usuário seja mais simples, cômoda e personalizada.

## Nosso projeto é organizado da seguinte forma:

#### Tecnologias

* **Front-end**
  - Gulp (http://gulpjs.com/)
  - Material design lite (http://www.getmdl.io/);
  - AngularJs (https://angularjs.org/)

* **Back-end**
	- Firibase (http://firebase.google.com/)

* **Mock (https://www.mockable.io)**

## Papeis de usuários

- Cliente
- Garçom
- Operador da cozinha
- Administrador

## Regras

- Cliente
	- O cliente para confirmar o cadastro necessita de aprovação de algum garçom.
	- O cliente fará um cadastro único para todos os estabelecimentos que utilizarem o app, porém precisará estar autorizado a fazer pedido em cada um deles.

- Atendimento
	- Esquema de fila (Primeiro a 'pedir' será o primeiro a ser atendido), podendo haver prioridade ou reordenação da fila.
	- Status do pedido (Todos os uruários envolvidos no processo poderão acompanhar o status do pedido, ex.: feito, na chapa, aguardando o garçom, entregue, etc).
	- Previsão de entrega para o cliente, enquanto o mesmo estiver efetuando o pedido.
	- Um novo pedido, ou atualizações em um pedido já existente precisa de aprovação do garçom para ser efetivado.

- Fluxos

	# O cliente:
		- Loga no sistema;
		- Faz check-in no local;
		- Faz o pedido;
		- Aguarda aprovação do pedido;
		- Acompanha o status do pedido;
		- Confirma recebimento;
		- Confere conta * Opção de separar a conta (por quantidade e por itens);
		- Efetuar pagamento (o pagamento também poderá ser feito logo após a solicitação do pedido, fica a critério do estabalecimento);
		- Confere pontuação ganha (cartão fidelidade) ;

	# O garçom
		- Anota pedido/aprova pedido feito pelo cliente;
		- Acompanha o status do pedido;
		- Lança pagamento;




