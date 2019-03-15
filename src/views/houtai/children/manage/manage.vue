<template>
  <div>
    <div class="add-btns-wrapper">
      <el-button @click="addPersonDir = true" class="add-btns" type="primary">添加用户</el-button>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="index" label="序号"></el-table-column>
      <!-- <el-table-column prop="name" label="工号"></el-table-column> -->
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column prop="username" label="姓名"></el-table-column>
      <el-table-column prop="roleName" label="工位"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="deletePerson(scope.row)" type="text" size="small">删除</el-button>

          <el-button type="text" size="small" @click="showEditPwd(scope.row)">修改密码</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog style="z-index: 9999" title="修改密码" :visible.sync="editPwdDir">
      <!--加急 单元行-标红 tr  + c-red-->
      <div>
        <el-row :gutter="20" class="t-tan">
          <el-col :span="4" class="t-left">
            <div class="grid-content bg-purple">姓名</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple t-left">{{editPerson.name}}</div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="t-tan">
          <el-col :span="4" class="t-left">
            <div class="grid-content bg-purple">新密码</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <el-input v-model="editPerson.v1" placeholder="请输入密码"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="t-tan">
          <el-col :span="4" class="t-left">
            <div class="grid-content bg-purple">确认新密码</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <el-input v-model="editPerson.v2" placeholder="请输入再次输入密码"></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="m-dialog-btn">
        <el-button type="danger" @click="editPwdDir = false">取消</el-button>
        <el-button type="primary" @click="editPWD">确定</el-button>
      </div>
    </el-dialog>
    <el-dialog style="z-index: 9999" title="添加用户" :visible.sync="addPersonDir">
      <!--加急 单元行-标红 tr  + c-red-->
      <div>
        <el-row :gutter="20" class="t-tan">
          <el-col :span="4" class="t-left">
            <div class="grid-content bg-purple">姓名</div>
          </el-col>
          <el-col :span="16">
            <el-input v-model="username" placeholder="请输入姓名"></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="t-tan">
          <el-col :span="4" class="t-left">
            <div class="grid-content bg-purple">密码</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <el-input v-model="password" placeholder="请输入密码"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="t-tan">
          <el-col :span="4" class="t-left">
            <div class="grid-content bg-purple">工位</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <div class="block">
                <el-cascader :options="options" v-model="selectedOptions"></el-cascader>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="t-tan">
          <el-col :span="4" class="t-left">
            <div class="grid-content bg-purple">备注名</div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content bg-purple">
              <el-input v-model="bzname" placeholder="请输入备注名"></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="m-dialog-btn">
        <el-button type="danger" @click="addPersonDir=false">取消</el-button>
        <el-button type="primary" @click="addPerson">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
    addUser,
    removeUser,
    modifyUser,
    getUsers
} from '../../../../api/index';
import { roleEnum } from '../../../../common/role-types/role-types';
export default {
    name: 'manage',
    data() {
        return {
            editPwdDir: false,
            addPersonDir: false,
            editPerson: {
                id: '',
                name: '',
                v1: '',
                v2: ''
            },

            selectedOptions: [],
            username: '',
            password: '',
            rePassword: '',
            bzname: '',
            options: [
                {
                    value: '1',
                    label: '装箱南线'
                },
                {
                    value: '2',
                    label: '装箱北线'
                },
                {
                    value: '3',
                    label: 'EMINI'
                },
                {
                    value: '4',
                    label: '前壁产线'
                },
                {
                    value: '5',
                    label: '天花产线'
                },
                {
                    value: '6',
                    label: '轿门产线'
                },
                {
                    value: '7',
                    label: '安捷木箱'
                }
            ],
            tableData: [
                {
                    date: '1',
                    name: '23333',
                    province: '1211231',
                    city: '沈飞',
                    address: '装箱南线'
                },
                {
                    date: '1',
                    name: '23333',
                    province: '1211231',
                    city: '沈飞',
                    address: '装箱南线'
                },
                {
                    date: '1',
                    name: '23333',
                    province: '1211231',
                    city: '沈飞',
                    address: '装箱南线'
                },
                {
                    date: '1',
                    name: '23333',
                    province: '1211231',
                    city: '沈飞',
                    address: '装箱南线'
                }
            ]
        };
    },
    methods: {
        async deletePerson(row) {
            let res = await removeUser({
                uids: row.id
            });
            if (res.code == 0) {
                let rowIndex = this.tableData.indexOf(row);
                this.tableData.splice(rowIndex, 1);
                this.$notify.success({
                    title: '成功',
                    message: res.codeInfo
                });
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        async addPerson() {
            if (this.username == '') {
                this.$notify.error({
                    type: '错误',
                    message: '请填写用户名'
                });
                return false;
            } else if (this.password == '') {
                this.$notify.error({
                    type: '错误',
                    message: '请填写密码'
                });
                return false;
            } else if (this.selectedOptions.length == 0) {
                this.$notify.error({
                    type: '错误',
                    message: '请选择工位'
                });
                return false;
            } else if (this.bzname == '') {
                this.$notify.error({
                    type: '错误',
                    message: '请填写备注名'
                });
                return false;
            }

            let res = await addUser({
                username: this.username,
                password: this.password,
                role: this.selectedOptions[0],
                name: this.bzname
            });

            if (res.code == 0) {
                this.$notify.success({
                    title: '成功',
                    message: res.codeInfo
                });
                this.getList();
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        async getData() {
            let res = await getUsers({
                currentpage: 1,
                pagesize: 100000
            });
            if (res.code == 0) {
                if (res.objects.entityList) {
                    res.objects.entityList.forEach((item, index) => {
                        item.index = index + 1;
                        item.roleName = roleEnum[item.role];
                    });
                }
                this.tableData = res.objects.entityList;
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        },
        
        showEditPwd(person) {
            this.editPwdDir = true;

            this.editPerson = {
                id: person.id,
                name: person.username,
                v1: '',
                v2: ''
            };
        },
        async editPWD() {
            // console.log(person);
            if (this.v1 == '') {
                this.$notify.error({
                    type: '错误',
                    message: '请填写新密码'
                });
                return false;
            } else if (this.v2 == '') {
                this.$notify.error({
                    type: '错误',
                    message: '请再次填写确认新密码'
                });
                return false;
            }

            let res = await modifyUser({
                id: this.editPerson.id,
                name: this.editPerson.name,
                newpassword: this.editPerson.newpassword,
                confirmpassword: this.editPerson.confirmpassword
            });

            if (res.code == 0) {
                this.$notify.success({
                    title: '成功',
                    message: res.codeInfo
                });
                this.getList();
            } else {
                this.$notify.error({
                    type: '错误',
                    message: res.codeInfo
                });
            }
        }
    },
    mounted() {
        console.log(1);
        this.getData();
    }
};
</script>
<style>
.m-dialog-btn {
  text-align: center;
  padding-top: 20px;
}
.t-left {
  height: 40px;
  line-height: 40px;
}
.t-tan {
  margin-bottom: 10px;
}
.add-btns-wrapper {
  margin-bottom: 10px;
  height: 40px;
}
.add-btns {
  float: right;
}
</style>
