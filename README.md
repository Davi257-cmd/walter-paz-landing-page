# Walter Paz - Gestor de Tráfego Pago

Site profissional para gestor de tráfego pago com design moderno e otimizado.

## 🚀 Tecnologias

- **React 18** + **TypeScript**
- **Vite** - Build tool ultra-rápido
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações suaves
- **Three.js** - Efeitos 3D
- **React Three Fiber** - Integração React + Three.js

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

## 🏗️ Build para Produção

```bash
npm run build
```

## 📁 Estrutura de Assets

- `/public/video/` - Vídeos de background
- `/public/person/` - Fotos de clientes
- `/public/resultados/` - Screenshots de resultados
- `/public/` - Logos e imagens gerais

## 🌐 Deploy na Vercel

O projeto está configurado para deploy automático na Vercel:

1. Conecte seu repositório GitHub à Vercel
2. A Vercel detectará automaticamente as configurações do `vercel.json`
3. O build será executado automaticamente

### Configurações de Cache

- **Vídeos**: Cache de 1 ano (immutable)
- **Imagens**: Cache de 1 ano (immutable)
- **Assets estáticos**: Cache otimizado

## ⚡ Otimizações Aplicadas

- ✅ Code splitting automático
- ✅ Lazy loading de imagens
- ✅ Chunks otimizados (React, Three.js, Framer Motion)
- ✅ Cache headers configurados
- ✅ Assets otimizados para produção

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa ESLint
- `npm run check` - Verifica tipos TypeScript

## 🎨 Componentes Principais

- `Home.tsx` - Página principal
- `FuturisticHero` - Hero section com animações
- `BioSection` - Seção sobre o especialista
- `AnimatedMarqueeHero` - Carrossel de resultados
- `VideoBackground` - Background de vídeo otimizado

## 📄 Licença

Projeto privado - Todos os direitos reservados
