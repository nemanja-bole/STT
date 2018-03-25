webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var competition_service_1 = __webpack_require__("../../../../../src/app/services/competition.service.ts");
var error_handler_1 = __webpack_require__("../../../../../src/app/common/errors/error-handler.ts");
var admin_auth_guard_service_1 = __webpack_require__("../../../../../src/app/services/admin-auth-guard.service.ts");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var angular2_jwt_1 = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
var app_component_1 = __webpack_require__("../../../../../src/app/views/app.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/views/login/login.component.ts");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/views/home/home.component.ts");
var auth_guard_service_1 = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var sign_up_component_1 = __webpack_require__("../../../../../src/app/views/sign-up/sign-up.component.ts");
var registration_success_component_1 = __webpack_require__("../../../../../src/app/views/registration-success/registration-success.component.ts");
var activation_component_1 = __webpack_require__("../../../../../src/app/views/activation/activation.component.ts");
var navbar_component_1 = __webpack_require__("../../../../../src/app/views/navbar/navbar.component.ts");
var competitions_component_1 = __webpack_require__("../../../../../src/app/views/competitions/competitions.component.ts");
var footer_component_1 = __webpack_require__("../../../../../src/app/views/footer/footer.component.ts");
var logged_guard_service_1 = __webpack_require__("../../../../../src/app/services/logged-guard.service.ts");
var email_validators_1 = __webpack_require__("../../../../../src/app/common/validators/email.validators.ts");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                home_component_1.HomeComponent,
                sign_up_component_1.SignUpComponent,
                registration_success_component_1.RegistrationSuccessComponent,
                activation_component_1.ActivationComponent,
                navbar_component_1.NavbarComponent,
                competitions_component_1.CompetitionsComponent,
                footer_component_1.FooterComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: '', component: home_component_1.HomeComponent, canActivate: [auth_guard_service_1.AuthGuard], pathMatch: 'full', },
                    { path: 'login', component: login_component_1.LoginComponent, canActivate: [logged_guard_service_1.LoggedGuard], },
                    { path: 'sign-up', component: sign_up_component_1.SignUpComponent, canActivate: [logged_guard_service_1.LoggedGuard], },
                    { path: 'registration-success', component: registration_success_component_1.RegistrationSuccessComponent, canActivate: [logged_guard_service_1.LoggedGuard], },
                    { path: 'activation/:token', component: activation_component_1.ActivationComponent, canActivate: [logged_guard_service_1.LoggedGuard], },
                    { path: 'competitions', component: competitions_component_1.CompetitionsComponent, canActivate: [auth_guard_service_1.AuthGuard], },
                ])
            ],
            providers: [
                auth_service_1.AuthService,
                auth_guard_service_1.AuthGuard,
                admin_auth_guard_service_1.AdminAuthGuard,
                logged_guard_service_1.LoggedGuard,
                angular2_jwt_1.AUTH_PROVIDERS,
                { provide: core_1.ErrorHandler, useClass: error_handler_1.AppErrorHandler },
                email_validators_1.EmailValidators,
                competition_service_1.CompetitionService,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/common/errors/app-error.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppError = (function () {
    function AppError(originalError) {
        this.originalError = originalError;
    }
    return AppError;
}());
exports.AppError = AppError;


/***/ }),

/***/ "../../../../../src/app/common/errors/bad-input-error.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var app_error_1 = __webpack_require__("../../../../../src/app/common/errors/app-error.ts");
var BadInputError = (function (_super) {
    __extends(BadInputError, _super);
    function BadInputError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BadInputError;
}(app_error_1.AppError));
exports.BadInputError = BadInputError;


/***/ }),

/***/ "../../../../../src/app/common/errors/error-handler.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AppErrorHandler = (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        alert('An unexpected error occured');
        console.log("ERROR", error);
    };
    return AppErrorHandler;
}());
exports.AppErrorHandler = AppErrorHandler;


/***/ }),

/***/ "../../../../../src/app/common/errors/not-found-error.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var app_error_1 = __webpack_require__("../../../../../src/app/common/errors/app-error.ts");
var NotFoundError = (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundError;
}(app_error_1.AppError));
exports.NotFoundError = NotFoundError;


/***/ }),

/***/ "../../../../../src/app/common/validators/email.validators.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var EmailValidators = (function () {
    function EmailValidators(authService) {
        this.authService = authService;
    }
    EmailValidators.prototype.shouldBeUnique = function (control) {
        var _this = this;
        clearTimeout(this.debouncer);
        return new Promise(function (resolve, reject) {
            _this.debouncer = setTimeout(function () {
                _this.authService.checkEmailAvailability(control.value)
                    .subscribe(function (result) {
                    console.log("AVAILABLE INFO", result);
                    if (result) {
                        resolve({ shouldBeUnique: true });
                    }
                    else {
                        resolve(null);
                    }
                }, function (error) {
                    throw error;
                });
            }, 1000);
        });
    };
    EmailValidators = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], EmailValidators);
    return EmailValidators;
}());
exports.EmailValidators = EmailValidators;


/***/ }),

/***/ "../../../../../src/app/services/admin-auth-guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var AdminAuthGuard = (function () {
    function AdminAuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AdminAuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isLoggedIn && this.authService.currentUser.is_superuser) {
            return true;
        }
        //todo: implement no access page
        //this.router.navigate(['/no-access'])
        return false;
    };
    AdminAuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], AdminAuthGuard);
    return AdminAuthGuard;
}());
exports.AdminAuthGuard = AdminAuthGuard;


/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;


/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var not_found_error_1 = __webpack_require__("../../../../../src/app/common/errors/not-found-error.ts");
var bad_input_error_1 = __webpack_require__("../../../../../src/app/common/errors/bad-input-error.ts");
var app_error_1 = __webpack_require__("../../../../../src/app/common/errors/app-error.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var angular2_jwt_1 = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var AuthService = (function () {
    function AuthService(authHttp, http, router) {
        this.authHttp = authHttp;
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.login = function (credentials) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/auth/', JSON.stringify(credentials), { headers: headers })
            .map(function (response) {
            var result = response.json();
            if (result && result.token) {
                localStorage.setItem('token', result.token);
                return true;
            }
            return false;
        })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    };
    AuthService.prototype.isLoggedIn = function () {
        return angular2_jwt_1.tokenNotExpired();
    };
    Object.defineProperty(AuthService.prototype, "currentUser", {
        get: function () {
            var token = localStorage.getItem('token');
            if (!token) {
                return null;
            }
            return new angular2_jwt_1.JwtHelper().decodeToken(token);
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.signUp = function (credentials) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('api/accounts/sign-up/', JSON.stringify(credentials), { headers: headers })
            .map(function (response) {
            var result = response.json();
            if (result) {
                return true;
            }
            else {
                return false;
            }
        })
            .catch(this.handleError);
    };
    AuthService.prototype.activation = function (token) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get('api/accounts/activation/', { headers: headers, params: { token: token } })
            .map(function (response) {
            return true;
        })
            .catch(this.handleError);
    };
    AuthService.prototype.checkEmailAvailability = function (email) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var body = {
            email: email
        };
        return this.http.post('api/accounts/availability/', JSON.stringify(body), { headers: headers })
            .map(function (response) {
            var result = response.json();
            if (result && result.registred) {
                return true;
            }
            else {
                return false;
            }
        })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        if (error.status === 400) {
            return Observable_1.Observable.throw(new bad_input_error_1.BadInputError(error.json()));
        }
        if (error.status === 404) {
            return Observable_1.Observable.throw(new not_found_error_1.NotFoundError());
        }
        return Observable_1.Observable.throw(new app_error_1.AppError(error.json()));
    };
    AuthService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular2_jwt_1.AuthHttp,
            http_1.Http,
            router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "../../../../../src/app/services/competition.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var angular2_jwt_1 = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
var data_service_1 = __webpack_require__("../../../../../src/app/services/data.service.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var CompetitionService = (function (_super) {
    __extends(CompetitionService, _super);
    function CompetitionService(http) {
        return _super.call(this, "api/competitions/", http) || this;
    }
    CompetitionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular2_jwt_1.AuthHttp])
    ], CompetitionService);
    return CompetitionService;
}(data_service_1.DataService));
exports.CompetitionService = CompetitionService;


/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_error_1 = __webpack_require__("../../../../../src/app/common/errors/app-error.ts");
var bad_input_error_1 = __webpack_require__("../../../../../src/app/common/errors/bad-input-error.ts");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var angular2_jwt_1 = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var not_found_error_1 = __webpack_require__("../../../../../src/app/common/errors/not-found-error.ts");
__webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
var DataService = (function () {
    function DataService(_url, _http) {
        this._url = _url;
        this._http = _http;
    }
    DataService.prototype.getAll = function () {
        return this._http.get(this._url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.create = function (resource) {
        return this._http.post(this._url, JSON.stringify(resource))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.update = function (resource) {
        return this._http.put(this._url + resource.id, JSON.stringify(resource))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.delete = function (id) {
        return this._http.delete(this._url + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        if (error.status === 400) {
            return Observable_1.Observable.throw(new bad_input_error_1.BadInputError(error.json()));
        }
        if (error.status === 404) {
            return Observable_1.Observable.throw(new not_found_error_1.NotFoundError());
        }
        return Observable_1.Observable.throw(new app_error_1.AppError(error.json()));
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [String, angular2_jwt_1.AuthHttp])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;


/***/ }),

/***/ "../../../../../src/app/services/logged-guard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var LoggedGuard = (function () {
    function LoggedGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    LoggedGuard.prototype.canActivate = function (route, state) {
        if (!this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    LoggedGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            auth_service_1.AuthService])
    ], LoggedGuard);
    return LoggedGuard;
}());
exports.LoggedGuard = LoggedGuard;


/***/ }),

/***/ "../../../../../src/app/views/activation/activation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/activation/activation.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  activation works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/activation/activation.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var ActivationComponent = (function () {
    function ActivationComponent(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    ActivationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            var token = params.get("token");
            _this.authService.activation(token).subscribe(function (result) {
                console.log(result);
            });
        });
    };
    ActivationComponent = __decorate([
        core_1.Component({
            selector: 'app-activation',
            template: __webpack_require__("../../../../../src/app/views/activation/activation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/activation/activation.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.ActivatedRoute])
    ], ActivationComponent);
    return ActivationComponent;
}());
exports.ActivationComponent = ActivationComponent;


/***/ }),

/***/ "../../../../../src/app/views/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navbar *ngIf = \"authService.isLoggedIn()\"></navbar>\r\n<div class=\"container main-content\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n<app-footer>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/views/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'Angular + Django App';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/views/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/app.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/views/competitions/competitions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/competitions/competitions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"collection\">\r\n  <a href=\"#!\" class=\"collection-item\" *ngFor=\"let competition of competitions\">{{ competition.name }}</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/competitions/competitions.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var competition_service_1 = __webpack_require__("../../../../../src/app/services/competition.service.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var CompetitionsComponent = (function () {
    function CompetitionsComponent(service) {
        this.service = service;
    }
    CompetitionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getAll()
            .subscribe(function (competitions) {
            _this.competitions = competitions;
        });
    };
    CompetitionsComponent = __decorate([
        core_1.Component({
            selector: 'app-competitions',
            template: __webpack_require__("../../../../../src/app/views/competitions/competitions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/competitions/competitions.component.css")]
        }),
        __metadata("design:paramtypes", [competition_service_1.CompetitionService])
    ], CompetitionsComponent);
    return CompetitionsComponent;
}());
exports.CompetitionsComponent = CompetitionsComponent;


/***/ }),

/***/ "../../../../../src/app/views/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col l6 s12\">\r\n          <p class=\"grey-text text-lighten-4\">Svea Ekonomi Belgrade office competitions app.</p>\r\n        </div>\r\n      </div>\r\n  </div>\r\n  <div class=\"footer-copyright\">\r\n      <div class=\"container\">\r\n          &copy; 2018 STT\r\n      </div>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/footer/footer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/views/footer/footer.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;


/***/ }),

/***/ "../../../../../src/app/views/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\r\n</div>\r\n<ul>\r\n  <!-- <li *ngIf = \"authService.isLoggedIn() && authService.currentUser.is_superuser\">\r\n    <h2><a routerLink = \"admin\">Admin</a></h2>        \r\n  </li> -->\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/views/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
        this.title = 'Angular + Django App';
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/views/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/views/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <form class=\"col s12 m8 l6 offset-l3 offset-m2 forms-stt z-depth-3\" [formGroup]=\"loginForm\" (ngSubmit)=\"signIn()\">\r\n    <div class=\"row\">\r\n      <div class=\"col s6 offset-s3 center-align\">\r\n        <img class=\"responsive-img\" src=\"/static/app/images/svea_logo_medium.png\" alt=\"Svea Logo\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div *ngIf=\"loginForm.errors\" class=\"col s12 form-validation-error\">\r\n        Invalid username and/or password.\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <label for=\"inputEmail\">Email address</label>\r\n        <input formControlName=\"email\" type=\"email\" id=\"inputEmail\" name=\"inputEmail\">\r\n        <span class=\"field-validation-error\" *ngIf=\"email.touched && email.invalid\" >You must provide valid email.</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <label for=\"inputPassword\">Password</label>\r\n        <input formControlName=\"password\" type=\"password\" id=\"inputPassword\" name=\"inputPassword\">\r\n        <span class=\"field-validation-error \" *ngIf=\"password.touched && password.invalid\" >Password is reqired.</span>\r\n      </div>\r\n    </div>\r\n    <button class=\"btn waves-effect waves-light\" type=\"submit\" [disabled]=\"loginForm.invalid\" >Login</button>\r\n  </form>\r\n\r\n  <p class=\"col s12 center-align\">Don't have account?\r\n    <a routerLink='/sign-up'>Sign up now!</a>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var bad_input_error_1 = __webpack_require__("../../../../../src/app/common/errors/bad-input-error.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var LoginComponent = (function () {
    function LoginComponent(router, route, authService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        //invalidLogin: boolean;
        this.loginForm = new forms_1.FormGroup({
            "email": new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            "password": new forms_1.FormControl('', forms_1.Validators.required),
        });
    }
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.loginForm.get("email");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get("password");
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.signIn = function () {
        var _this = this;
        this.authService.login(this.loginForm.value)
            .subscribe(function (result) {
            if (result) {
                var returnUrl = _this.route.snapshot.queryParamMap.get('returnUrl');
                _this.router.navigate([returnUrl || '/']);
            }
            else {
            }
        }, function (error) {
            if (error instanceof bad_input_error_1.BadInputError) {
                _this.loginForm.setErrors({
                    invalidLogin: true
                });
            }
            else {
                throw error;
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/views/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_1.ActivatedRoute,
            auth_service_1.AuthService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/views/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n    <div class=\"nav-wrapper\">\r\n        <div class=\"container\">\r\n            <a routerLink=\"/\" class=\"brand-logo\">                \r\n                <img class=\"responsive-img logo-img\" src=\"/static/app/images/svea_logo_medium_bw.png\" alt=\"Svea Logo\">                \r\n            </a>\r\n            <a href=\"#\" data-target=\"mobile-menu\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a>\r\n            <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\r\n                <li><a routerLink=\"/competitions\">Competitions</a></li>\r\n                <li><a routerLink=\"/\">Profile</a></li>\r\n                <li><a routerLink=\"/\">Notifications</a></li>\r\n                <li><a (click) = \"authService.logout()\">Logout</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n\r\n<ul class=\"sidenav\" id=\"mobile-menu\">\r\n    <li><a routerLink=\"/competitions\">Competitions</a></li>\r\n    <li><a routerLink=\"/\">Profile</a></li>\r\n    <li><a routerLink=\"/\">Notifications</a></li>\r\n    <li><a class=\"cursor-pointer\" (click)=\"authService.logout()\">Logout</a></li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/views/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            template: __webpack_require__("../../../../../src/app/views/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "../../../../../src/app/views/registration-success/registration-success.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/registration-success/registration-success.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n  <div class=\"row\">\r\n    <div class=\"col s6 offset-s3 center-align\">\r\n      <img class=\"responsive-img\" src=\"/static/app/images/svea_logo_medium.png\" alt=\"Svea Logo\">\r\n    </div>\r\n  </div>\r\n  <div class=\"col s12 m8 l6 offset-l3 offset-m2 forms-stt z-depth-3 center-align\">\r\n      <p>Registration successful! We sent you activation link, please check your email.</p>\r\n  </div>\r\n  <p class=\"col s12 center-align\">\r\n      <a routerLink='/login'>Go to Login page</a>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/registration-success/registration-success.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var RegistrationSuccessComponent = (function () {
    function RegistrationSuccessComponent() {
    }
    RegistrationSuccessComponent.prototype.ngOnInit = function () {
    };
    RegistrationSuccessComponent = __decorate([
        core_1.Component({
            selector: 'app-registration-success',
            template: __webpack_require__("../../../../../src/app/views/registration-success/registration-success.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/registration-success/registration-success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationSuccessComponent);
    return RegistrationSuccessComponent;
}());
exports.RegistrationSuccessComponent = RegistrationSuccessComponent;


/***/ }),

/***/ "../../../../../src/app/views/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <form class=\"col s12 m8 l6 offset-l3 offset-m2 forms-stt z-depth-3\" [formGroup]=\"signUpForm\" (ngSubmit)=\"signUp()\">\r\n    <div class=\"row\">\r\n      <div class=\"col s6 offset-s3 center-align\">\r\n        <img class=\"responsive-img\" src=\"/static/app/images/svea_logo_medium.png\" alt=\"Svea Logo\">\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"signUpForm.errors\" >\r\n      <div class=\"col s12 form-validation-error\">\r\n        Invalid sign up.\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <label for=\"inputFirstName\">First Name</label>\r\n        <input formControlName=\"firstName\" type=\"text\" id=\"inputFirstName\" name=\"inputFirstName\">\r\n        <span class=\"field-validation-error\" *ngIf=\"firstName.touched && firstName.invalid\" >First name is required.</span>\r\n      </div>\r\n    </div>    \r\n    \r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <label for=\"inputLastName\">Last Name</label>\r\n        <input formControlName=\"lastName\" type=\"text\" id=\"inputLastName\" name=\"inputLastName\">\r\n        <span class=\"field-validation-error\" *ngIf=\"lastName.touched && lastName.invalid\" >Last name is required.</span>\r\n      </div>\r\n    </div>    \r\n\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <label for=\"inputEmail\">Email address</label>\r\n        <input formControlName=\"email\" type=\"email\" id=\"inputEmail\" name=\"inputEmail\">\r\n        <span class=\"field-validation-neutral\" *ngIf=\"email.pending\">Checking availability...</span>\r\n        <span class=\"field-validation-error\" *ngIf=\"email.touched && email.invalid\" >\r\n          <span *ngIf=\"email.errors.required || email.errors.email || email.errors.pattern\">You must provide valid email (example@svea.com).</span>\r\n          <span *ngIf=\"email.errors.shouldBeUnique\">This email is already registred.</span>\r\n        </span>\r\n      </div>\r\n    </div>    \r\n\r\n    <div class=\"row\">\r\n      <div class=\"input-field col s12\">\r\n        <label for=\"inputPassword\">Password</label>\r\n        <input formControlName=\"password\" type=\"password\" id=\"inputPassword\" name=\"inputPassword\">\r\n        <span *ngIf=\"password.touched && password.invalid\">\r\n          <span class=\"field-validation-error\" *ngIf=\"password.errors.required\" >Password is reqired.</span>\r\n          <span class=\"field-validation-error\" *ngIf=\"password.errors.minlength\" >Password must be at least 8 characters long.</span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n    \r\n    <button class=\"btn waves-effect waves-light\" type=\"submit\" [disabled]=\"signUpForm.invalid || email.pending\" >Sign up</button>\r\n\r\n  </form>\r\n\r\n  <p class=\"col s12 center-align\">Already have account?\r\n    <a routerLink='/login'>Go to Login page</a>\r\n  </p>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/sign-up/sign-up.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var email_validators_1 = __webpack_require__("../../../../../src/app/common/validators/email.validators.ts");
var bad_input_error_1 = __webpack_require__("../../../../../src/app/common/errors/bad-input-error.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var auth_service_1 = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var SignUpComponent = (function () {
    function SignUpComponent(authService, router, emailValidators) {
        this.authService = authService;
        this.router = router;
        this.emailValidators = emailValidators;
        this.signUpForm = new forms_1.FormGroup({
            "firstName": new forms_1.FormControl('', forms_1.Validators.required),
            "lastName": new forms_1.FormControl('', forms_1.Validators.required),
            "email": new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.email,
                forms_1.Validators.pattern(new RegExp("@svea.com$"))
            ], this.emailValidators.shouldBeUnique.bind(this.emailValidators)),
            "password": new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(8)]),
        });
    }
    Object.defineProperty(SignUpComponent.prototype, "firstName", {
        get: function () {
            return this.signUpForm.get("firstName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "lastName", {
        get: function () {
            return this.signUpForm.get("lastName");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "email", {
        get: function () {
            return this.signUpForm.get("email");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignUpComponent.prototype, "password", {
        get: function () {
            return this.signUpForm.get("password");
        },
        enumerable: true,
        configurable: true
    });
    SignUpComponent.prototype.signUp = function () {
        var _this = this;
        this.authService.signUp(this.signUpForm.value)
            .subscribe(function (result) {
            if (result) {
                _this.router.navigate(['/registration-success']);
            }
        }, function (error) {
            if (error instanceof bad_input_error_1.BadInputError) {
                _this.signUpForm.setErrors({
                    invalidSignUp: true,
                });
            }
            else {
                throw error;
            }
        });
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/views/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService,
            router_1.Router,
            email_validators_1.EmailValidators])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map