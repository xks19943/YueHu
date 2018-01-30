package com.liaoye.yuehu;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.liaoye.yuehu.app.AppManageModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * 本地包管理类，管理自己的模块
 * Created by xiaoming on 2017/6/2.
 */
public class NativePackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new AppManageModule(reactContext));
        return modules;
    }

    // 在0.47之后过期
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }


    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
