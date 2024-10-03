import { P } from '../../components/Paragrafo/styles'
import Titulo from '../../components/Titulo'
import { GitHubSessao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <P tipo="secondario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ab
      autem mollitia ex veritatis officia tenetur quidem porro est facilis
      sapiente, incidunt placeat voluptatem dolor minus nihil in optio
      perspiciatis!
    </P>
    <GitHubSessao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=redscipher&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
        alt=""
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=redscipher&layout=compact&langs_count=7&theme=dracula"
        alt=""
      />
    </GitHubSessao>
  </section>
)

export default Sobre
