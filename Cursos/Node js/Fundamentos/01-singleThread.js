'use strict'

const singleThread=()=>{
    console.log ('-------------');
    console.log('id del proceso........'+ process.pid);
    console.log('Titulo................'+ process.title);
    console.log('Directorio de node....'+ process.execPath);
    console.log('Directorio de Actual..'+ process.cwd());
    console.log('Version de Node.......'+ process.version);
    console.log('Versiones de dependencias'+ process.versions);
    console.log('Plataforma (S.O)......'+ process.platform);
}

singleThread()