import {
  Component,
  TemplateRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { EMessageCode, MessageService } from './message.service';

@Component({
  selector: 'app-message-service-virtual-ref',
  template: `
    <ng-template #xxx_ref>
      <div class="flex w-[90%]">
        <span
          nz-icon
          nzType="close-circle"
          nzTheme="twotone"
          class="text-lg mr-2"
        ></span>
        <span>
          There are XXXError, you must refer to
          <a
            class="cursor-pointer underline text-blue-500 hover:underline"
            target="_black"
            >something</a
          >
          to check out
        </span>
      </div>
    </ng-template>
  `,
})
export class MessageServiceVirtualRefComponent implements AfterViewInit {
  @ViewChild('xxx_ref') xxxTemplateRef!: TemplateRef<any>;

  constructor(private messageService: MessageService) {}

  ngAfterViewInit(): void {
    this.messageService.initTemplate(
      EMessageCode.XXXError,
      this.xxxTemplateRef
    );
  }
}
