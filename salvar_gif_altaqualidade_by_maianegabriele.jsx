// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //
// ----------------------------------------- DEVELOPED BY MAIANE ARAUJO | GRAPHIC DESIGNER ----------------------------------------- //
// ------------------------------------------------------------  :)      www.maiane.com.br    :)  ------------------------------------------------------------- //
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------- //

#target photoshop
app.bringToFront();


function saveGIF (fileName){
        
        var myFile = new File(doc.path + "/" + fileName + ".gif")
                
        var gifOptions = new GIFSaveOptions(); 
       
       
        // ----------------------- MUDE AS CONFIGURAÇÕES AQUI ----------------------- //
        
        //Define o algoritmo de redução de cor. Para outros formatos é possível substituir "LOCALSELECTIVE" por:  EXACT, LOCALADAPTATIVE, MACOSPALETTE, MASTERADAPTATIVE, MASTERPERCEPTUAL, MASTERSELECTIVE, PREVIOUSPALETTE, UNIFORM, WEBPALETTE, WINDOWSPALETTE.
        gifOptions.palette = Palette.LOCALSELECTIVE;
        
        //Define o número de cores. De 0 a 256.
        gifOptions.colors = 256;
        
        //Define o tipo de pontilhamento (dither). Para outros formatos é possível substituir "DIFFUSION" por: NOISE, NONE ou PATTERN. 
        gifOptions.dither = Dither.DIFFUSION;
        
        //Opção válida apenas quando a opção acima (dither) está como "DIFFUSION". Define a quantidade de pontilhamento. De 0 a 100.
        gifOptions.ditherAmout = 100;

        //Opção válida apenas quando a opção acima (dither) está como "DIFFUSION". "true" protege as cores da imagem.
        gifOptions.preserveExactColors = true;        
        
        //Define o tipo de cores a ser forçada para utilizado na imagem.Para outros formatos é possível substituir "WEB" por: BLACKWHITE, NONE, PRIMARIES,WEB.
        gifOptions.forced = ForcedColors.NONE;
        
        //Define o download progressivo. Se "true" está ativado, "false" é desativado.
        gifOptions.interlaced = true;
        
        //Define a cor para preencher o fundo caso a transparência esteja desligada.Para outros formatos é possível substituir "WHITE" por: BACKGROUND, BLACK, FOREGROUND, NETSCAPE, NONE ou SEMIGRAY.
        gifOptions.matte = MatteType.WHITE;
        
        //Define se o arquivo será salvo com transparência. Opções: "true" (verdadeiro - com transparência) ou "false" (falso - sem transparência).
        gifOptions.transparency = true;       
        
        // -------------------------------------------------------------------------------------------- //
        
        doc.saveAs(myFile, gifOptions, true);
    
}


if (documents.length > 0) {
    
    var doc = activeDocument;
    var fileName = doc.name.replace(/.\w+$/,"");
    saveGIF(fileName);
    alert("Deus abençoe este script!\nSeu GIF está salvo. Tenha um dia animado. :)\n\nDesenvolvido por: www.maiane.com.br", "s2 s2 s2 s2 s2");

} else {
    
    alert ("Hey! Eu estava pensando...\n\nPor que você não tenta abrir um arquivo antes de tentar salvar o GIF?", "Bad feelings... :(");

};




