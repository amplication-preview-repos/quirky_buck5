/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FeeService } from "../fee.service";
import { FeeCreateInput } from "./FeeCreateInput";
import { Fee } from "./Fee";
import { FeeFindManyArgs } from "./FeeFindManyArgs";
import { FeeWhereUniqueInput } from "./FeeWhereUniqueInput";
import { FeeUpdateInput } from "./FeeUpdateInput";

export class FeeControllerBase {
  constructor(protected readonly service: FeeService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Fee })
  async createFee(@common.Body() data: FeeCreateInput): Promise<Fee> {
    return await this.service.createFee({
      data: data,
      select: {
        amount: true,
        createdAt: true,
        description: true,
        dueDate: true,
        id: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Fee] })
  @ApiNestedQuery(FeeFindManyArgs)
  async fees(@common.Req() request: Request): Promise<Fee[]> {
    const args = plainToClass(FeeFindManyArgs, request.query);
    return this.service.fees({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        description: true,
        dueDate: true,
        id: true,
        status: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Fee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async fee(@common.Param() params: FeeWhereUniqueInput): Promise<Fee | null> {
    const result = await this.service.fee({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        description: true,
        dueDate: true,
        id: true,
        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Fee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFee(
    @common.Param() params: FeeWhereUniqueInput,
    @common.Body() data: FeeUpdateInput
  ): Promise<Fee | null> {
    try {
      return await this.service.updateFee({
        where: params,
        data: data,
        select: {
          amount: true,
          createdAt: true,
          description: true,
          dueDate: true,
          id: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Fee })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFee(
    @common.Param() params: FeeWhereUniqueInput
  ): Promise<Fee | null> {
    try {
      return await this.service.deleteFee({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          description: true,
          dueDate: true,
          id: true,
          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}