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
                                            'data-target="#components-links-module-AppModule-6e014d913ea95a0e62a3a37aa8e8fccbd76dd4bcd85a9ece6e48a7f638235ebc58b6742432fe32a761b1bb1732f48bf9f56cc8003a6a74e6f36c8e8e805c338d"' : 'data-target="#xs-components-links-module-AppModule-6e014d913ea95a0e62a3a37aa8e8fccbd76dd4bcd85a9ece6e48a7f638235ebc58b6742432fe32a761b1bb1732f48bf9f56cc8003a6a74e6f36c8e8e805c338d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-6e014d913ea95a0e62a3a37aa8e8fccbd76dd4bcd85a9ece6e48a7f638235ebc58b6742432fe32a761b1bb1732f48bf9f56cc8003a6a74e6f36c8e8e805c338d"' :
                                            'id="xs-components-links-module-AppModule-6e014d913ea95a0e62a3a37aa8e8fccbd76dd4bcd85a9ece6e48a7f638235ebc58b6742432fe32a761b1bb1732f48bf9f56cc8003a6a74e6f36c8e8e805c338d"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-6e014d913ea95a0e62a3a37aa8e8fccbd76dd4bcd85a9ece6e48a7f638235ebc58b6742432fe32a761b1bb1732f48bf9f56cc8003a6a74e6f36c8e8e805c338d"' : 'data-target="#xs-injectables-links-module-AppModule-6e014d913ea95a0e62a3a37aa8e8fccbd76dd4bcd85a9ece6e48a7f638235ebc58b6742432fe32a761b1bb1732f48bf9f56cc8003a6a74e6f36c8e8e805c338d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-6e014d913ea95a0e62a3a37aa8e8fccbd76dd4bcd85a9ece6e48a7f638235ebc58b6742432fe32a761b1bb1732f48bf9f56cc8003a6a74e6f36c8e8e805c338d"' :
                                        'id="xs-injectables-links-module-AppModule-6e014d913ea95a0e62a3a37aa8e8fccbd76dd4bcd85a9ece6e48a7f638235ebc58b6742432fe32a761b1bb1732f48bf9f56cc8003a6a74e6f36c8e8e805c338d"' }>
                                        <li class="link">
                                            <a href="injectables/SnotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SnotificationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NgxSnotifireModule.html" data-type="entity-link" >NgxSnotifireModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NgxSnotifireModule-668bb66f9727b85063d59f04d69538f73b2955b1b3601f96d69ed94de3f4a10ebef3d0c474e9525843cf1b48f6ffa6911e7b0472359af469e0ee0826056ceb2b"' : 'data-target="#xs-components-links-module-NgxSnotifireModule-668bb66f9727b85063d59f04d69538f73b2955b1b3601f96d69ed94de3f4a10ebef3d0c474e9525843cf1b48f6ffa6911e7b0472359af469e0ee0826056ceb2b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NgxSnotifireModule-668bb66f9727b85063d59f04d69538f73b2955b1b3601f96d69ed94de3f4a10ebef3d0c474e9525843cf1b48f6ffa6911e7b0472359af469e0ee0826056ceb2b"' :
                                            'id="xs-components-links-module-NgxSnotifireModule-668bb66f9727b85063d59f04d69538f73b2955b1b3601f96d69ed94de3f4a10ebef3d0c474e9525843cf1b48f6ffa6911e7b0472359af469e0ee0826056ceb2b"' }>
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
                                            'data-target="#pipes-links-module-NgxSnotifireModule-668bb66f9727b85063d59f04d69538f73b2955b1b3601f96d69ed94de3f4a10ebef3d0c474e9525843cf1b48f6ffa6911e7b0472359af469e0ee0826056ceb2b"' : 'data-target="#xs-pipes-links-module-NgxSnotifireModule-668bb66f9727b85063d59f04d69538f73b2955b1b3601f96d69ed94de3f4a10ebef3d0c474e9525843cf1b48f6ffa6911e7b0472359af469e0ee0826056ceb2b"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-NgxSnotifireModule-668bb66f9727b85063d59f04d69538f73b2955b1b3601f96d69ed94de3f4a10ebef3d0c474e9525843cf1b48f6ffa6911e7b0472359af469e0ee0826056ceb2b"' :
                                            'id="xs-pipes-links-module-NgxSnotifireModule-668bb66f9727b85063d59f04d69538f73b2955b1b3601f96d69ed94de3f4a10ebef3d0c474e9525843cf1b48f6ffa6911e7b0472359af469e0ee0826056ceb2b"' }>
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
                                <a href="classes/NotifireModel.html" data-type="entity-link" >NotifireModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/SnotifireModel.html" data-type="entity-link" >SnotifireModel</a>
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
                                    <a href="injectables/SnotificationService.html" data-type="entity-link" >SnotificationService</a>
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
                                <a href="interfaces/NotificationDefaults.html" data-type="entity-link" >NotificationDefaults</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationFormValue.html" data-type="entity-link" >NotificationFormValue</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NotificationGlobalConfig.html" data-type="entity-link" >NotificationGlobalConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifireAnimate.html" data-type="entity-link" >SnotifireAnimate</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SnotifireConfig.html" data-type="entity-link" >SnotifireConfig</a>
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