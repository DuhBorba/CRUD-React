import Head from 'next/head'

export default function Home() {

  return (
    <>
      <Head>
        <title>CRUD React</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>Cadastrar Usuário</h2>

        <form>
          <label>Nome:</label>
          <input type="text" name="name" placeholder='Digite o nome' />

          <br /><br />

          <label>Email:</label>
          <input type="email" name="email" placeholder='Digite o email' />

          <br /><br />

          <button type='submit'>Enviar</button>
        </form>
      </main>
    </>
  )
}