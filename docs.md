# COMANDOS GIT

## 1. iniciar un repositorio local

- solo para los que estan iniciado el proyecto desde cero

```
git init

# el resultado
# Initialized empty Git repository in D:/cursos/app-pedidos/.git/
```

- para los ya tienen el proyecto iniciado

```
git clone <direccion remota>
```

- Para verificar el estado de cambios del proyecto

```
git status
```

- Para agregar todos los archivos a la zona intermedia (INDEX)

```
git add .
```

- Para agregar al area de espera (HEAD)

```
git commit -m "Primer commit"
```

### Ahora ya estamos preparados para subir al repositorio remoto

- Si quieres conectar tu repositorio local a un repositorio remoto:

```
git remote add origin <sever>
git remote add origin https://github.com/cchura94/back-app-pedidos.git
```

- para verificar las direcciones remotas

```
git remote -v
```

- Por ultimo: para subir del repositorio local al repositorio remoto

```
git push origin master
```
