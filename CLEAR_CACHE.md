# Como Limpar o Cache do Vite

Se você está enfrentando erros de "Invalid hook call" ou problemas com React, siga estes passos:

## Passo 1: Parar o servidor de desenvolvimento
Pressione `Ctrl+C` no terminal onde o Vite está rodando.

## Passo 2: Limpar o cache do Vite
Execute no terminal (dentro da pasta do projeto):

```bash
# Windows PowerShell
Remove-Item -Recurse -Force node_modules\.vite -ErrorAction SilentlyContinue

# Ou se estiver usando Git Bash / WSL
rm -rf node_modules/.vite
```

## Passo 3: Limpar o cache do navegador
- Pressione `Ctrl+Shift+Delete` no navegador
- Selecione "Imagens e arquivos em cache"
- Clique em "Limpar dados"

## Passo 4: Reinstalar dependências (se necessário)
```bash
npm install
```

## Passo 5: Reiniciar o servidor
```bash
npm run dev
```

## Se o problema persistir:

1. **Delete a pasta `node_modules` e `package-lock.json`**:
   ```bash
   Remove-Item -Recurse -Force node_modules
   Remove-Item package-lock.json
   npm install
   ```

2. **Verifique se há múltiplas versões do React**:
   ```bash
   npm list react react-dom
   ```

3. **Limpe o cache do npm**:
   ```bash
   npm cache clean --force
   ```

