/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const config_1 = __webpack_require__(5);
const typeorm_1 = __webpack_require__(6);
const cache_manager_1 = __webpack_require__(7);
const redisStore = tslib_1.__importStar(__webpack_require__(8));
const user_1 = __webpack_require__(9);
const blog_post_entity_1 = __webpack_require__(11);
const auth_module_1 = __webpack_require__(12);
const blog_post_module_1 = __webpack_require__(20);
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            cache_manager_1.CacheModule.register({
                store: redisStore,
                url: process.env.REDIS_URL,
                isGlobal: true,
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                url: process.env.DATABASE_URL,
                entities: [blog_post_entity_1.BlogPost, user_1.User],
                autoLoadEntities: true,
                synchronize: true,
                logging: true,
            }),
            typeorm_1.TypeOrmModule.forFeature([blog_post_entity_1.BlogPost]),
            auth_module_1.AuthModule,
            blog_post_module_1.BlogPostModule
        ],
    })
], AppModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 6 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("@nestjs/cache-manager");

/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("cache-manager-redis-store");

/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const tslib_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(10);
let User = class User {
};
exports.User = User;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "email", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], User.prototype, "password", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], User.prototype, "createdAt", void 0);
exports.User = User = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], User);


/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlogPost = void 0;
const tslib_1 = __webpack_require__(3);
const typeorm_1 = __webpack_require__(10);
let BlogPost = class BlogPost {
};
exports.BlogPost = BlogPost;
tslib_1.__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    tslib_1.__metadata("design:type", String)
], BlogPost.prototype, "id", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)(),
    tslib_1.__metadata("design:type", String)
], BlogPost.prototype, "title", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)('text'),
    tslib_1.__metadata("design:type", String)
], BlogPost.prototype, "content", void 0);
tslib_1.__decorate([
    (0, typeorm_1.Column)({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], BlogPost.prototype, "published", void 0);
tslib_1.__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], BlogPost.prototype, "createdAt", void 0);
tslib_1.__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    tslib_1.__metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], BlogPost.prototype, "updatedAt", void 0);
exports.BlogPost = BlogPost = tslib_1.__decorate([
    (0, typeorm_1.Entity)()
], BlogPost);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const jwt_1 = __webpack_require__(13);
const config_1 = __webpack_require__(5);
const constants_1 = __webpack_require__(14);
const auth_service_1 = __webpack_require__(15);
const auth_controller_1 = __webpack_require__(17);
const typeorm_1 = __webpack_require__(6);
const user_1 = __webpack_require__(9);
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            jwt_1.JwtModule.register({
                secret: constants_1.JWT_SECRET,
                signOptions: { expiresIn: constants_1.JWT_EXPIRES_IN },
            }),
            typeorm_1.TypeOrmModule.forFeature([user_1.User]),
        ],
        providers: [auth_service_1.AuthService],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);


/***/ }),
/* 13 */
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JWT_EXPIRES_IN = exports.JWT_SECRET = void 0;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const jwt_1 = __webpack_require__(13);
const typeorm_1 = __webpack_require__(6);
const typeorm_2 = __webpack_require__(10);
const bcrypt = tslib_1.__importStar(__webpack_require__(16));
const user_1 = __webpack_require__(9);
let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        const user = await this.userRepository.findOne({ where: { email } });
        if (user && (await bcrypt.compare(password, user.password))) {
            return user;
        }
        return null;
    }
    async login(user) {
        const payload = { email: user.email, sub: user.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
    async register(email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = this.userRepository.create({ email, password: hashedPassword });
        return this.userRepository.save(user);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(user_1.User)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const auth_service_1 = __webpack_require__(15);
const login_dto_1 = __webpack_require__(18);
const register_dto_1 = __webpack_require__(19);
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(loginDto) {
        const user = await this.authService.validateUser(loginDto.email, loginDto.password);
        return this.authService.login(user);
    }
    async register(registerDto) {
        return this.authService.register(registerDto.email, registerDto.password);
    }
};
exports.AuthController = AuthController;
tslib_1.__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(200),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
tslib_1.__decorate([
    (0, common_1.Post)('register'),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_c = typeof register_dto_1.RegisterDto !== "undefined" && register_dto_1.RegisterDto) === "function" ? _c : Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
exports.AuthController = AuthController = tslib_1.__decorate([
    (0, common_1.Controller)('auth'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
class LoginDto {
}
exports.LoginDto = LoginDto;


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterDto = void 0;
class RegisterDto {
}
exports.RegisterDto = RegisterDto;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlogPostModule = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const blog_post_service_1 = __webpack_require__(21);
const blog_post_controller_1 = __webpack_require__(23);
const cache_manager_1 = __webpack_require__(7);
const typeorm_1 = __webpack_require__(6);
const blog_post_entity_1 = __webpack_require__(11);
const jwt_1 = __webpack_require__(13);
const constants_1 = __webpack_require__(14);
let BlogPostModule = class BlogPostModule {
};
exports.BlogPostModule = BlogPostModule;
exports.BlogPostModule = BlogPostModule = tslib_1.__decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([blog_post_entity_1.BlogPost]),
            cache_manager_1.CacheModule.register(),
            jwt_1.JwtModule.register({
                secret: constants_1.JWT_SECRET,
                signOptions: { expiresIn: constants_1.JWT_EXPIRES_IN },
            }),
        ],
        providers: [blog_post_service_1.BlogPostService],
        controllers: [blog_post_controller_1.BlogPostController],
    })
], BlogPostModule);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlogPostService = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const typeorm_1 = __webpack_require__(6);
const typeorm_2 = __webpack_require__(10);
const blog_post_entity_1 = __webpack_require__(11);
const cache_manager_1 = __webpack_require__(7);
const cache_manager_2 = __webpack_require__(22);
let BlogPostService = class BlogPostService {
    constructor(blogPostRepository, cacheManager) {
        this.blogPostRepository = blogPostRepository;
        this.cacheManager = cacheManager;
    }
    async create(blogPost) {
        return this.blogPostRepository.save(blogPost);
    }
    async findAll() {
        const cachedData = await this.cacheManager.get('blog-posts');
        if (cachedData) {
            return cachedData;
        }
        const data = await this.blogPostRepository.find();
        await this.cacheManager.set('blog-posts', data, 60000);
        return data;
    }
    async findOne(id) {
        return this.blogPostRepository.findOne({ where: { id } });
    }
    async update(id, blogPost) {
        await this.blogPostRepository.update(id, blogPost);
        return this.blogPostRepository.findOne({ where: { id } });
    }
    async remove(id) {
        await this.blogPostRepository.delete(id);
    }
};
exports.BlogPostService = BlogPostService;
exports.BlogPostService = BlogPostService = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__param(0, (0, typeorm_1.InjectRepository)(blog_post_entity_1.BlogPost)),
    tslib_1.__param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof cache_manager_2.Cache !== "undefined" && cache_manager_2.Cache) === "function" ? _b : Object])
], BlogPostService);


/***/ }),
/* 22 */
/***/ ((module) => {

module.exports = require("cache-manager");

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlogPostController = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const blog_post_service_1 = __webpack_require__(21);
const auth_guard_1 = __webpack_require__(24);
let BlogPostController = class BlogPostController {
    constructor(blogPostService) {
        this.blogPostService = blogPostService;
    }
    create(blogPost) {
        return this.blogPostService.create(blogPost);
    }
    findAll() {
        return this.blogPostService.findAll();
    }
    findOne(id) {
        return this.blogPostService.findOne(id);
    }
    update(id, blogPost) {
        return this.blogPostService.update(id, blogPost);
    }
    remove(id) {
        return this.blogPostService.remove(id);
    }
};
exports.BlogPostController = BlogPostController;
tslib_1.__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    tslib_1.__param(0, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [typeof (_b = typeof Partial !== "undefined" && Partial) === "function" ? _b : Object]),
    tslib_1.__metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], BlogPostController.prototype, "create", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", typeof (_d = typeof Promise !== "undefined" && Promise) === "function" ? _d : Object)
], BlogPostController.prototype, "findAll", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Get)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], BlogPostController.prototype, "findOne", null);
tslib_1.__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__param(1, (0, common_1.Body)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, typeof (_f = typeof Partial !== "undefined" && Partial) === "function" ? _f : Object]),
    tslib_1.__metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], BlogPostController.prototype, "update", null);
tslib_1.__decorate([
    (0, common_1.Delete)(':id'),
    tslib_1.__param(0, (0, common_1.Param)('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], BlogPostController.prototype, "remove", null);
exports.BlogPostController = BlogPostController = tslib_1.__decorate([
    (0, common_1.Controller)('blog-posts'),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof blog_post_service_1.BlogPostService !== "undefined" && blog_post_service_1.BlogPostService) === "function" ? _a : Object])
], BlogPostController);


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthGuard = void 0;
const tslib_1 = __webpack_require__(3);
const common_1 = __webpack_require__(4);
const jwt_1 = __webpack_require__(13);
const constants_1 = __webpack_require__(14);
let AuthGuard = class AuthGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const payload = await this.jwtService.verifyAsync(token, {
                secret: constants_1.JWT_SECRET
            });
            request['user'] = payload;
        }
        catch {
            throw new common_1.UnauthorizedException();
        }
        return true;
    }
    extractTokenFromHeader(request) {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = tslib_1.__decorate([
    (0, common_1.Injectable)(),
    tslib_1.__metadata("design:paramtypes", [typeof (_a = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _a : Object])
], AuthGuard);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const app_module_1 = __webpack_require__(2);
const config_1 = __webpack_require__(5);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.enableCors({
        origin: configService.get('FRONTEND_URL') || 'http://localhost:4200',
        credentials: true,
    });
    await app.listen(process.env.PORT || 3000);
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=main.js.map