import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarroRepository } from '../repository/carro.repository';
import { DadosCarroDto } from '../dto/DadosCarro.dto';
import { DadosVeicularesEntity } from '../entity/dadosVeiculares.entity';
import { CarroService } from '../service/carro.service';

@Controller('/percurso-carro')
export class CarroController {
  constructor(private carroService: CarroService) {}
  @Post()
  async criarPercuso(@Body() dadosPercurso: DadosCarroDto) {
    const usuarioEntity = new DadosVeicularesEntity();
    usuarioEntity.velocidade = dadosPercurso.velocidade;
    usuarioEntity.aceleracao = dadosPercurso.aceleracao;
    usuarioEntity.tempo = dadosPercurso.tempo;
    usuarioEntity.consumo_energetico = dadosPercurso.consumo_energetico;
    usuarioEntity.numero_percurso = dadosPercurso.numero_percurso;

    await this.carroService.criarPercuso(usuarioEntity);
    return usuarioEntity;
  }
}
