import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class SenhasService {
  public senhasGeral: number = 0;
  public senhasPrior: number = 0;
  public senhasExame: number = 0;
  public senhasTotal: number = 0;

  public inputNovaSenha: string = '';

  public senhasArray: {SG: string[], SP: string[], SE: string[]} = {
	  SG: [],
	  SP: [],
	  SE: [],
  }

  somaQuant(tipoSenha: string) {
	  if (tipoSenha == "SG") {
		this.senhasGeral++;
	  } else if (tipoSenha == "SP") {
		this.senhasPrior++;
	  } else if (tipoSenha == "SE") {
		this.senhasExame++;
	  }
	  this.senhasTotal++;
  }

  setInputNovaSenha(tipoSenha: string) {
      this.inputNovaSenha =
	      new Date().getFullYear().toString().substring(2, 4) +
	      new Date().getMonth().toString().padStart(2, '0') +
	      new Date().getDay().toString().padStart(2, '0') +
	      '-' +
	      tipoSenha;

     if (tipoSenha === "SG") {
	     this.inputNovaSenha += (this.senhasArray.SG.length + 1).toString().padStart(2, '0');
	     this.senhasArray.SG.push(this.inputNovaSenha);
     } else if (tipoSenha === "SP") {
	     this.inputNovaSenha += (this.senhasArray.SP.length + 1).toString().padStart(2, '0');
	     this.senhasArray.SP.push(this.inputNovaSenha);
     } else if (tipoSenha === "SE") {
	     this.inputNovaSenha += (this.senhasArray.SE.length + 1).toString().padStart(2, '0');
	     this.senhasArray.SE.push(this.inputNovaSenha);
     }

  }

  novaSenha(tipoSenha: string = '') {	
    this.setInputNovaSenha(tipoSenha);

    this.somaQuant(tipoSenha);

    console.log(this.senhasArray);
  }
}
