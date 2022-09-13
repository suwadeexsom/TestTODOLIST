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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodolistsController = void 0;
const common_1 = require("@nestjs/common");
const todolists_service_1 = require("./todolists.service");
const create_todolist_dto_1 = require("./dto/create-todolist.dto");
const update_todolist_dto_1 = require("./dto/update-todolist.dto");
let TodolistsController = class TodolistsController {
    constructor(todolistsService) {
        this.todolistsService = todolistsService;
    }
    create(createTodolistDto) {
        console.log(createTodolistDto);
        return this.todolistsService.create(createTodolistDto);
    }
    findAll() {
        return this.todolistsService.findAll();
    }
    findOne(id) {
        return this.todolistsService.findOne(+id);
    }
    update(id, updateTodolistDto) {
        return this.todolistsService.update(+id, updateTodolistDto);
    }
    remove(id) {
        return this.todolistsService.remove(+id);
    }
};
/*
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_todolist_dto_1.CreateTodolistDto]),
    __metadata("design:returntype", void 0)
], TodolistsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TodolistsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodolistsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_todolist_dto_1.UpdateTodolistDto]),
    __metadata("design:returntype", void 0)
], TodolistsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TodolistsController.prototype, "remove", null);
TodolistsController = __decorate([
    (0, common_1.Controller)('todolists'),
    __metadata("design:paramtypes", [todolists_service_1.TodolistsService])
], TodolistsController);
exports.TodolistsController = TodolistsController;
//# sourceMappingURL=todolists.controller.js.map*/