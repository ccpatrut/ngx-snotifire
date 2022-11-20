'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ng-snotify</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="changelog.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>CHANGELOG
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a43e63135ad6095bf435a616756b725adb3732078db6778a7e5df20929cc2928372a92502581bef271393cbbb26f2f158b6dccfd42c4a6c501be305ab358263a"' : 'data-target="#xs-components-links-module-AppModule-a43e63135ad6095bf435a616756b725adb3732078db6778a7e5df20929cc2928372a92502581bef271393cbbb26f2f158b6dccfd42c4a6c501be305ab358263a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a43e63135ad6095bf435a616756b725adb3732078db6778a7e5df20929cc2928372a92502581bef271393cbbb26f2f158b6dccfd42c4a6c501be305ab358263a"' :
                                            'id="xs-components-links-module-AppModule-a43e63135ad6095bf435a616756b725adb3732078db6778a7e5df20929cc2928372a92502581bef271393cbbb26f2f158b6dccfd42c4a6c501be305ab358263a"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-a43e63135ad6095bf435a616756b725adb3732078db6778a7e5df20929cc2928372a92502581bef271393cbbb26f2f158b6dccfd42c4a6c501be305ab358263a"' : 'data-target="#xs-injectables-links-module-AppModule-a43e63135ad6095bf435a616756b725adb3732078db6778a7e5df20929cc2928372a92502581bef271393cbbb26f2f158b6dccfd42c4a6c501be305ab358263a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a43e63135ad6095bf435a616756b725adb3732078db6778a7e5df20929cc2928372a92502581bef271393cbbb26f2f158b6dccfd42c4a6c501be305ab358263a"' :
                                        'id="xs-injectables-links-module-AppModule-a43e63135ad6095bf435a616756b725adb3732078db6778a7e5df20929cc2928372a92502581bef271393cbbb26f2f158b6dccfd42c4a6c501be305ab358263a"' }>
                                        <li class="link">
                                            <a href="injectables/SnotifireService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SnotifireService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgxSnotifireModule.html" data-type="entity-link" >NgxSnotifireModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NgxSnotifireModule-08bda785ee2bef0e80bb209ba06f7b93770900f76cbf1792eb04bad9ec4eea2adcfecc9b410aae51604c1b725c1f5f2d3747ac6e29a3a4e9e53fd0316ef564a2"' : 'data-target="#xs-components-links-module-NgxSnotifireModule-08bda785ee2bef0e80bb209ba06f7b93770900f76cbf1792eb04bad9ec4eea2adcfecc9b410aae51604c1b725c1f5f2d3747ac6e29a3a4e9e53fd0316ef564a2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NgxSnotifireModule-08bda785ee2bef0e80bb209ba06f7b93770900f76cbf1792eb04bad9ec4eea2adcfecc9b410aae51604c1b725c1f5f2d3747ac6e29a3a4e9e53fd0316ef564a2"' :
                                            'id="xs-components-links-module-NgxSnotifireModule-08bda785ee2bef0e80bb209ba06f7b93770900f76cbf1792eb04bad9ec4eea2adcfecc9b410aae51604c1b725c1f5f2d3747ac6e29a3a4e9e53fd0316ef564a2"' }>
                                            <li class="link">
                                                <a href="components/ButtonsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NgxSnotifireComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NgxSnotifireComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PromptComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PromptComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ToastComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ToastComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-NgxSnotifireModule-08bda785ee2bef0e80bb209ba06f7b93770900f76cbf1792eb04bad9ec4eea2adcfecc9b410aae51604c1b725c1f5f2d3747ac6e29a3a4e9e53fd0316ef564a2"' : 'data-target="#xs-pipes-links-module-NgxSnotifireModule-08bda785ee2bef0e80bb209ba06f7b93770900f76cbf1792eb04bad9ec4eea2adcfecc9b410aae51604c1b725c1f5f2d3747ac6e29a3a4e9e53fd0316ef564a2"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-NgxSnotifireModule-08bda785ee2bef0e80bb209ba06f7b93770900f76cbf1792eb04bad9ec4eea2adcfecc9b410aae51604c1b725c1f5f2d3747ac6e29a3a4e9e53fd0316ef564a2"' :
                                            'id="xs-pipes-links-module-NgxSnotifireModule-08bda785ee2bef0e80bb209ba06f7b93770900f76cbf1792eb04bad9ec4eea2adcfecc9b410aae51604c1b725c1f5f2d3747ac6e29a3a4e9e53fd0316ef564a2"' }>
                                            <li class="link">
                                                <a href="pipes/KeysPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >KeysPipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/TruncatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TruncatePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/ButtonsComponent.html" data-type="entity-link" >ButtonsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/NgxSnotifireComponent.html" data-type="entity-link" >NgxSnotifireComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PromptComponent.html" data-type="entity-link" >PromptComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ToastComponent.html" data-type="entity-link" >ToastComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/SnotifireModel.html" data-type="entity-link" >SnotifireModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/SnotifireToastModel.html" data-type="entity-link" >SnotifireToastModel</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/SnotifireService.html" data-type="entity-link" >SnotifireService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ButtonsConfig.html" data-type="entity-link" >ButtonsConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/FunctionalConfig.html" data-type="entity-link" >FunctionalConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationConfig.html" data-type="entity-link" >NotificationConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationFormValue.html" data-type="entity-link" >NotificationFormValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifireAnimate.html" data-type="entity-link" >SnotifireAnimate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifireConfig.html" data-type="entity-link" >SnotifireConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifireDefaults.html" data-type="entity-link" >SnotifireDefaults</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifireGlobalConfig.html" data-type="entity-link" >SnotifireGlobalConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifireNotifications.html" data-type="entity-link" >SnotifireNotifications</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ToastData.html" data-type="entity-link" >ToastData</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/VisualConfig.html" data-type="entity-link" >VisualConfig</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#pipes-links"' :
                                'data-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/KeysPipe.html" data-type="entity-link" >KeysPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/TruncatePipe.html" data-type="entity-link" >TruncatePipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});