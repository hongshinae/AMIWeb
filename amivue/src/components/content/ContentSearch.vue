<template>
	<div class="search-wrap1">
		<div class="wbox">
			<div class="search-img">
				<icon-base viewBox="0 0 16 16" width="1.2em" height="1.2em" icon-color="" icon-name="search" cls="bi-search mx-auto b-icon bi">
					<icon-search />
				</icon-base>
			</div>
			<div class="search">
				<!--검색영역-->
				<slot />
				<!--//검색영역-->
			</div>
			<div class="btn-wrap ml-auto">
				<button type="button" class="btn btn-primary btn-block">검 색</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
