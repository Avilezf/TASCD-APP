import { PampeDto } from './dto/pampe.dto';
import { IonCard, IonContent, IonTextarea } from '@ionic/angular';
import { PampeService } from '../../services/pampe.service';
import { SessionService } from '../../../shared/services/session.service';
import { ResponsePampeDto } from './dto/response-pampe.dto';
import { FormUtil } from 'src/app/shared/util/form.util';
import { ErrorType } from 'src/app/shared/enum/error-type.enum';
import { UtilService } from '../../../shared/services/util.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pampe',
  templateUrl: './pampe.page.html',
  styleUrls: ['./pampe.page.scss'],
})
export class PampePage implements OnInit {

  protected formBuilderGroup(): { [key: string]: any; } {
    throw new Error('Method not implemented.');
  }
  protected onSubmitAction(): Promise<void> {
    throw new Error('Method not implemented.');
  }

  @ViewChild(IonContent) content!: IonContent;
  @ViewChild('textarea') textarea!: IonTextarea;

  public isTextFocus:boolean = true;
  public isPampeDone:boolean = false;
  textarea2:string = '';

  constructor(private router: Router, private pampeService :PampeService, private sessionService: SessionService, private utilService: UtilService) {
   }

  ngOnInit() {
    this.isPampeDoneRequest();
  }

  async isPampeDoneRequest(){
    let userId = await this.sessionService.getUserId();
    const response = await this.pampeService.isPampeDone(userId).toPromise() as ResponsePampeDto;
    console.log(response.message  === 'true');
    if(response.message === 'true'){
      this.isPampeDone = true;
    }else{
      this.isPampeDone = false;
    }
  }



  async pampe(): Promise<void>{

    let userId = await this.sessionService.getUserId();
    const textareaHtml = this.textarea2;

    let pampeDto: PampeDto = {
      qtdd: textareaHtml as string,
      userId: userId as string
    };


    let response = await this.pampeService.pampe(pampeDto).toPromise() as ResponsePampeDto;
    if(response)
      await this.utilService.showToast({ message: 'Save Successfully', type: ErrorType.info });
      this.router.navigate(['/qtdd']);
  }

  scrollTo(){
    this.isTextFocus = false;
  }

  scrollDown(){
    this.isTextFocus = true;
  }


}
