package com.liaoye.yuehu;

import android.app.Activity;
import android.os.Bundle;

import com.liaoye.yuehu.utils.ActivityUtils;


/**
 * Created by xiaoming on 2017/7/11.
 */

public class BaseActivity extends Activity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        ActivityUtils.addActivity(this);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        ActivityUtils.removeActivity(this);
    }
}
