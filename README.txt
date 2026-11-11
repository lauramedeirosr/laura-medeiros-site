PORTFÓLIO — LAURA MEDEIROS
"Primeiro entender. Depois construir."

ESTRUTURA
- index.html ............ conteúdo e seções
- css/styles.css ........ identidade visual (tokens no topo), layout e responsivo
- js/projects.js ........ LISTA DE PROJETOS: o único arquivo para editar projetos
- js/i18n.js ............ IDIOMAS: textos em inglês e espanhol (o português fica no index.html)
- js/main.js ............ interações (projetos, painel de caso, serviços, animações)
- assets/projetos/ ...... imagens dos projetos (uma pasta por projeto)
- _arquivo-v3/ .......... versão anterior, só para consulta (pode apagar)

SUAS FOTOS E IMAGENS (basta salvar com estes nomes; enquanto não existirem, aparece uma textura)
- assets/laura/foto-principal.jpg ... sua foto, no arco da seção "Sobre" (retrato vertical, ~1200x1600)
- assets/galeria/detalhe-1.jpg ...... galeria: formato arco (vertical)
- assets/galeria/detalhe-2.jpg ...... galeria: formato círculo (quadrada)
- assets/galeria/detalhe-3.jpg ...... galeria: formato arredondado (vertical)
Dica: imagens em JPG ou WebP com até ~400 KB deixam o site rápido.

COMO ADICIONAR OU ATUALIZAR UM PROJETO
1. Coloque a imagem em assets/projetos/<id-do-projeto>/capa.jpg
   (ideal: 2000px de largura, JPG ou WebP, até ~400 KB)
2. Em js/projects.js, preencha os campos do projeto: imagem, imagemAlt,
   funcionalidades e demo. Sem imagem, a capa é tipográfica, com o nome do projeto ajustado à medida.
3. Para um projeto novo, troque o { emPreparacao: true, ... }
   por um projeto completo, seguindo o modelo dos outros.
4. Para esconder os slots "em preparação": MOSTRAR_EM_PREPARACAO = false.

IDENTIDADE
- Cores: Tinta #0E0C0C · Grafite #1C1A1A · Cinzas #3A3636 #6F6A68 #B9B4B0 #DEDAD5
  Papel #F3F0EB · Vinho #5A1726 · Vinho profundo #3A0E18 · Vinho linha #7A2234
- Regra: o vinho ocupa no máximo ~8% de cada tela. A exceção é o contato.
- Fontes: Anybody (títulos, nome e rótulos; variável em largura) · Funnel Sans (texto)
- Logotipo: bloco justo (LAURA / MEDEIROS com a mesma largura) + monograma LM com régua vinho

CONTATO
O número do WhatsApp não aparece no texto do site: só no link dos botões (wa.me).

PUBLICAR
É um site estático: envie a pasta inteira (sem _arquivo-v3) para qualquer
hospedagem estática (Netlify, Vercel, GitHub Pages, Hostinger etc.).
