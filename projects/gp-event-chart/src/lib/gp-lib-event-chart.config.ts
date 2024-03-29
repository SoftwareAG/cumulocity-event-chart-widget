/**
 * Copyright (c) 2020 Software AG, Darmstadt, Germany and/or its licensors
 *
 * SPDX-License-Identifier: Apache-2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'event-chart-config',
  templateUrl: './gp-lib-event-chart.config.html',
  styleUrls: ['./gp-lib-event-chart.config.css'],
})
// tslint:disable-next-line: component-class-suffix
export class GpLibEventChartConfig implements OnInit {
  @Input() config: any = {};
  @Output() configData: EventEmitter<any> = new EventEmitter();
  isOpenCP = false;
  borderCP = false;

  constructor() {}

  ngOnInit() {}

  openColorPicker() {
    if (!this.isOpenCP) {
      this.isOpenCP = true;
    }
  }
  openBorderColorPicker() {
    if (!this.borderCP) {
      this.borderCP = true;
    }
  }
  closeColorPicker() {
    if (this.isOpenCP) {
      this.isOpenCP = false;
    }
  }
  closeBorderColorPicker() {
    if (this.borderCP) {
      this.borderCP = false;
    }
  }
  setSelectedColor(value) {
    if (this.config.color) {
      this.config.color = this.config.color + ';' + value;
    } else {
      this.config.color = value;
    }
  }
  setSelectedBorderColor(value) {
    if (this.config.borderColor) {
      this.config.borderColor = this.config.borderColor + ';' + value;
    } else {
      this.config.borderColor = value;
    }
  }
  SubmitData() {

    this.configData.emit(this.config);
  
  }
}
