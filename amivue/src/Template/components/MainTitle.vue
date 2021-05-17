<template>
	<div class="main-location-wrap">
		<h1>기본 페이지</h1>
		<div class="tap-wrap">
			<button type="button" class="btn btn-primary rounded-pill">tap 1</button>
			<button type="button" class="btn btn-outline-primary rounded-pill">tap 2</button>
			<button type="button" class="btn btn-outline-primary rounded-pill">tap 3</button>
		</div>
		<div class="main-location">
			<ol class="breadcrumb">
				<li class="breadcrumb-item">
					<a href="" class="router-link-active" target="_self">
						<svg
							viewBox="0 0 16 16"
							width="1em"
							height="1em"
							focusable="false"
							role="img"
							aria-label="house"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							class="bi-house b-icon bi"
						>
							<g>
								<path
									fill-rule="evenodd"
									d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
								></path>
								<path
									fill-rule="evenodd"
									d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
								></path>
							</g>
						</svg>
						홈
					</a>
				</li>
				<li class="breadcrumb-item active">
					<span aria-current="location">페이지1</span>
				</li>
				<li class="breadcrumb-item active">
					<span aria-current="location">페이지2</span>
				</li>
			</ol>
		</div>
	</div>
</template>
<script></script>
<style lang="scss">
@import "~@/assets/scss/components/maintitle.scss";
</style>
