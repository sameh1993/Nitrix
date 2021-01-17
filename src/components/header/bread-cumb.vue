<template>
     <!-- ##### Welcome Area Start ##### -->
    <div class="breadcumb-area" v-if="$route.name != ''">
        <!-- breadcumb content -->
        <div class="breadcumb-content">
            <div class="container h-100">
                <div class="row h-100 align-items-center">
                    <div class="col-12">
                        <nav aria-label="breadcrumb" class="breadcumb--con text-center">
                            <h2 class="w-text title text-capitalize wow fadeInUp" data-wow-delay="0.2s"> {{ $route.name }} </h2>
                            <ol class="breadcrumb justify-content-center wow fadeInUp" data-wow-delay="0.4s">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page"> {{$route.name}} </li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- ##### Welcome Area End ##### -->
</template>

<style lang="scss">
.h-75 {
    height: 75Vh;
}
</style>